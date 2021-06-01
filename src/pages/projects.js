import React, { useState } from 'react'
import { useProjectContext } from '../context/context'
import reaProjects from '../data/reactProjects';
import {
    Project,
    Categories,
} from '../components'

const allCategories = ['all', ...new Set(reaProjects.map((item) => item.category))];

const Projects = () => {
    const { reactProject, setReactProject } = useProjectContext()
    const [category, setCategory] = useState(allCategories)

    const filterProject = (category) => {
        console.log(category)
        if (category === 'all') {
            setReactProject(reaProjects)
            return;
        }
        const newProjects = reaProjects.filter(proj => proj.category === category)
        return setReactProject(newProjects)
    }

    return (
        <div className='color' id="top">
            <div className="project-section" id="project-container">
                <div className="categories">
                </div>
                <Categories filterProject={filterProject} category={category} setCategory={setCategory} />
                <Project reactProject={reactProject} />
            </div>
        </div>
    )
}

export default Projects
