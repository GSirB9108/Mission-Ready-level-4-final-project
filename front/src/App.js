import './App.css';
import Homepage from './components/homepage';

import ProjectFilter from './components/projectfilter/proj_filter';
import { BrowserRouter, Route,/* Switch */} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/projects" component={ProjectFilter} />
        
        </BrowserRouter>
    </div>
  );
}

export default App;
