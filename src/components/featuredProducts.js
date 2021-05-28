import React from 'react';
import Languages from '../data/language';
import HomeProjects from './homeProjects';
import feactureProductdata from '../data/feactureProductdata';

const featuredProducts = () => {
    const Image1 = 'https://xp.io/storage/Afyk1FH.png'
    return (
        <div className="featured-products">
            <div className='product-text'>
                <div>
                    <h3>about our</h3>
                    <h2>Pranam</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nsequuntur obcaecati Lorem ipsum dolor sit amet consectetur?</p>
                <a href="/about" class="main-btn ">Learn more</a>
            </div>
            {feactureProductdata.map((item, index) => {
                return <HomeProjects key={index} item={item} />
            })}
        </div>
    )
}

export default featuredProducts
