import React from 'react'

const Categories = ({ category, filterProject }) => {
    const [activeBtn, setActiveBtn] = React.useState(0)

    const handleClick = (category, index) => {
        filterProject(category)
        setActiveBtn(index)
    }

    return (
        <div className="categories">
            {category.map((category, index) => {
                return (
                    <button className={activeBtn === index ? 'active' : null} onClick={() => handleClick(category, index)} key={index}>{category}</button>
                )
            })}
        </div>
    )
}

export default Categories
