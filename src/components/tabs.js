import React, { useState } from 'react'
import job from '../data/skillTabs'
import { FaAngleDoubleRight } from "react-icons/fa";


const Tabs = () => {
    const [jobs, setJobs] = useState(job)
    const [value, setValue] = useState(0)

    const { company, dates, duties, title } = jobs[value]
    return (
        <div style={{ paddingTop: '90px', paddingBottom: '90px', background: '#f8f8f8' }}>
            <section className="section">
                <div className="jobs-center">

                    <div className="btn-container">
                        {jobs.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => setValue(index)}
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                >
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>

                    <article className="job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-desc">
                                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            )
                        })}
                    </article>
                </div>
                <a href="/about">
                    <button type="button" className="btn">
                        more info
                    </button>
                </a>
            </section>
        </div>
    )
}

export default Tabs
