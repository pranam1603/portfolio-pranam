import React, { useContext } from 'react';
import reaProjects from '../data/reactProjects';

const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
    const [reactProject, setReactProject] = React.useState(reaProjects)

    return (
        <ProjectContext.Provider value={{ reactProject, setReactProject }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProjectContext = () => {
    return useContext(ProjectContext)
}