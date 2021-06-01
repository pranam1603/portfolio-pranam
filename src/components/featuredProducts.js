import React from 'react';
import HomeProjects from './homeProjects';
import feactureProductdata from '../data/feactureProductdata';


const featuredProducts = () => {
    return (
        <div id="feacture" style={{ backgroundColor: '#3a3e3b' }}>
            <div className="featured-products">
                <div className='product-text'>
                    <div>
                        <h3>about our</h3>
                        <h2>Projects</h2>
                    </div>
                    <p style={{ paddingTop: '20px' }}>Here is the highlight of few of my projects. I use React, Html, JavaScript, Css for these Projects.</p>
                    <a href="/projects">All Projects</a>
                </div>
                {feactureProductdata.map((item, index) => {
                    return <HomeProjects key={index} item={item} />
                })}
            </div>
        </div>
    )
}

export default featuredProducts
