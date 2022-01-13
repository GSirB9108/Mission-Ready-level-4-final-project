import { useState, useEffect } from 'react';
import './proj_filter.css';

import Filter from '../projectfilter/subcomponents/filter';
import ProjectItem from '../projectfilter/subcomponents/proj_item';
import LevelFilter from '../projectfilter/subcomponents/levelFilter';
import Header from '../projects/header';
import Topbarprojects from '../projects/topbarprojects';

import backenddata from './backenddata.json';

const ProjectFilter = () =>  {

    const [filtered, setFiltered] = useState([]);
    const [subFilter, setSubFilter] = useState([]);
    const [actFilter, setActFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [subjectFilter, setSubjectFilter] = useState([]);
    const [levelFilter, setLevelFilter] = useState('');
    const [projects, setProjects] = useState([]);


    const getProjects = () => {
        setProjects(backenddata)
    }


    useEffect (() => {
        getProjects();
        //console.log (projects);
    }, [])

    useEffect(() => {
        setFiltered(projects)
    }, [projects])

    const handleLevelFilter = (event, newLevelFilter) => {
        setLevelFilter(newLevelFilter)
    }

    const handleSubscriptionFilter = (event) => {
        let newFilter = event.target.value;
        if (subFilter.includes(newFilter)) {
            setSubFilter(subFilter.filter(filter => filter !== newFilter))
        } else {
            setSubFilter([...subFilter, newFilter])
        }
    }

    const handleActTypeFilter = (event) => {
        let newFilter = event.target.value;
        if (actFilter.includes(newFilter)) {
            setActFilter(actFilter.filter(filter => filter !== newFilter))
        } else {
            setActFilter([...actFilter, newFilter])
        }
    }

    const handleYearFilter = (event) => {
        let newFilter = event.target.value;
        console.log(event.target.value)
        if (yearFilter.includes(newFilter)) {
            setYearFilter(yearFilter.filter(filter => filter !== newFilter))
        } else {
            setYearFilter([...yearFilter, newFilter])
        }
    }

    const handleSubMatterFilter = (event) => {
        let newFilter = event.target.value;
        console.log(newFilter);
        if (subjectFilter.map(item => "--" + item).includes("--" + newFilter)) {
            setSubjectFilter(subjectFilter.filter(filter => filter !== newFilter))
        } else {
            setSubjectFilter([...subjectFilter, newFilter])
        }
    }

    const handleFilteredProjects = () => {
        console.log(subFilter)
        console.log(actFilter)
        console.log(yearFilter)
        console.log(subjectFilter)
        console.log(levelFilter)
        setFiltered(
			projects.filter(project => {
				if (subFilter.length && !subFilter.includes(project.subscription)) return false
				if (actFilter.length && !actFilter.includes(project.activity_type)) return false
				if (yearFilter.length && !yearFilter.toString().split(",").includes(project.year+"")) return false
				if (subjectFilter.length && !subjectFilter.map(item => "--"+item).includes("--"+project.subject_matter1 || !subjectFilter.map(item => "--"+item).includes ("--"+project.subject_matter2) ||!subjectFilter.map(item => "--"+item).includes("--"+project.subject_matter3))) return false
             /* if (subjectFilter.length && !subjectFilter.map(item => "--"+item).includes(("--"+project.subject_matter2))) return false
				if (subjectFilter.length && !subjectFilter.map(item => "--"+item).includes(("--"+project.subject_matter1))) return false
                if (subjectFilter.length && !subjectFilter.map(item => "--"+item).includes(("--"+project.subject_matter3))) return false */
                if (levelFilter && levelFilter !== project.course) return false;
				return project
			}
			)
		)
        console.log(filtered)
    }

    useEffect(() => {
        console.log('useEffect triggered')
        handleFilteredProjects()
    }, [subFilter, actFilter, yearFilter, subjectFilter, levelFilter]);

    const filters = {
        subscription: ['Free', 'Premium'],
        activityType: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'],
        yearLevel: [[1,2,3,4], [5,6], [7,8], [9,10,11,12,13]],
        subjectMatter: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music']
    }

    return (
        <>
            <div className = 'projects-wrapper'>
                <Topbarprojects />
                <Header />
                <LevelFilter 
                                levelFilter = {levelFilter}
                                handleLevelFilter = {handleLevelFilter}
                            />


                <div className = 'core-wrap'>
                    <div className = 'filter-wrapper'>

                        <Filter
                            filters = {filters}
                            filterTitle = "Subscription"
                            filterState = {subFilter}
                            filterArray = {filters.subscription}
                            filterHandler = {handleSubscriptionFilter}
                            key = 'Subscription'
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Activity Type"
                            filterState = {actFilter}
                            filterArray = {filters.activityType}
                            filterHandler = {handleActTypeFilter}
                            key = "Activity Type"
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Year Level"
                            filterState = {yearFilter}
                            filterArray = {filters.yearLevel}
                            filterHandler = {handleYearFilter}
                            key = "Year Level"
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Subject Matter"
                            filterState = {subjectFilter}
                            filterArray = {filters.subjectMatter}
                            filterHandler = {handleSubMatterFilter}
                            key = "Subject Matter"
                        />
                    </div>

                        

                        <div className = 'project-wrap' >
                        
                                
                            {
                                filtered.map(project => (
                                    <ProjectItem project = {project} key ={project.project_name} />
                                ))
                            }


                        </div>

                </div>

                         
            </div>
        </>
    )


}

export default ProjectFilter;