import React from 'react'
import { FaGithubSquare, FaPaperPlane, } from 'react-icons/fa'
import { SiNetlify } from 'react-icons/si'
import error from '../Images/error.png'

const Project = ({ reactProject }) => {

    return (
        <div className="project">
            {reactProject.map(project => {
                const { id, text, url, code, type, image, language } = project
                return (
                    <article className="card" key={id}>
                        <div className="card-header">
                            <img src={image ? image : error} alt="projectPicture" />
                        </div>
                        <div className="icon-middle">
                            <a href={url} target="_blank" rel="noopener noreferrer"><FaPaperPlane /></a>
                        </div>
                        <div className="card-body">
                            <h3>{text}</h3>
                            <p>{type ? type : 'basic'}</p>
                            <ul>
                                {language.map((lang, index) => {
                                    return (
                                        <li key={index}>{lang.icon}<span>{lang.iconText}</span></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span><a className="git" rel="noopener noreferrer" href="https://github.com/pranam1603" target="_blank"><FaGithubSquare /></a><a target="_blank" href="https://github.com/pranam1603" style={{ marginLeft: '10px' }} className="git"><SiNetlify /></a></span>
                            <span><a href={code} target="_blank" rel="noopener noreferrer">Source Code</a></span>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Project
