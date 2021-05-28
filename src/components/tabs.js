import React, { useState } from 'react'
import job from '../data/skillTabs'
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tabs = () => {
    const [jobs, setJobs] = useState(job)
    const [value, setValue] = useState(0)

    const { company, dates, duties, title } = jobs[value]
    return (
        <section className="section">
            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}
                            >
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                {/* job info */}
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
            <Link to="/about">
                <button type="button" className="btn">
                    more info
                </button>
            </Link>
        </section>
    )
}

export default Tabs
