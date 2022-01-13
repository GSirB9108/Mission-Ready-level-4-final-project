require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(express.json());
const knex = require('knex');
const { off } = require('process');

/* connection with DB */
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : process.env.DB_PASS,
      database : 'levelupworks'
    }
  });

//check db connection
db.select('*').from('users').then(data=>{
    console.log(data)
});

app.post('/signup', (req, res) => {
    const { email, name, password,role} = req.body;

    const salt= bcrypt.genSaltSync(10);
    const hash= bcrypt.hashSync(password,salt);

    db('users').insert({
            hash:hash,
            email:email,
            name:name,
            role:role
    }).then(console.log)
    .then(res.sendStatus(200))
        
    .catch(err => res.status(400).json('unable to sign up'))    
})
    
app.post('/signin', (req,res) => {
    db.select('email', 'hash').from('users')
    .where('email', '=', req.body.email)
    .then (data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
            
            return db.select('*').from('users')
                .where('email','=',req.body.email)
                .then(user => {
                    console.log("login success")
                    //res.json(user[0])
                    res.sendStatus(200);
                })
                .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
});


app.listen(4000, () => {
    console.log("server up");
});














/* prev code with mysql
app.post('/signup', (req, res) => {
    console.log(req.body)
    const email=req.body.email;
    const password=req.body.password;
    const full_name=req.body.full_name
    const role=req.body.role
    if (email.length > 0 && password.length > 0 && full_name.length > 0)  {
        db.query(`insert into users (email,password,full_name,role) values ('${email}', '${password}', '${full_name}','${role}')`, function(error){
            if(error){
                console.log(error);
            }
        });
        res.sendStatus(200);
    } else {
        return res.sendStatus(400);
    }
})

app.post('/login', (req, res) => {
    db.query(`select * from users where email = '${req.body.email}' and password='${req.body.password}'`, function(error,result){
        if (error){
            console.log(error);
        } else {
            if (result.length > 0) {
                res.sendStatus(200)
            } else {
                res.sendStatus(401)
            }
        }
    })
})
 */