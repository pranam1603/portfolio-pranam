import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
// eslint-disable-next-line
export default [
      {
        id: 100,
        text: 'YelpCamp',
        url: 'https://quiet-eyrie-98125.herokuapp.com/',
        code: 'https://github.com/pranam1603/yelpCamp_code',
        image: 'https://xp.io/storage/29uyuyuc.png',
        category: 'node Mongo',
        type: 'largeScale Project',
        language: [
            {
                icon: <FaNode />,
                iconText: 'Node',
            },
            {
                icon: <SiMongodb />,
                iconText: 'Mongo'
            },
            {
                icon: <FaBootstrap />,
                iconText: 'Boots.'
            },
        ]
    },

    {
        id: 24,
        text: 'Comfy Ecommerce',
        url: 'https://comfy-ecommerce-site.netlify.app/',
        code: 'https://github.com/pranam1603/react-comfy-ecommerce',
        category: 'react',
        type: 'largeScale project',
        image: 'https://react-projects.netlify.app/static/c89879136add22d91d41c746cbbae7dc/26425/ScreenShot2020-11-15at10.51.03AM.webp',
        language: [
            {
                icon: <FaHtml5 />,
                iconText: 'HTML',
            },
            {
                icon: <FaCss3Alt />,
                iconText: 'CSS'
            },
            {
                icon: <FaReact />,
                iconText: 'REACT'
            },
        ]
    },
    {
        id: 37,
        text: 'Color Game',
        url: 'https://pranam1603.github.io/colorgame/colorGame.html',
        code: 'https://github.com/pranam1603/colorgame',
        image: 'https://xp.io/storage/BxHsmln.png',
        category: 'game',
        type: 'game Project',
        language: [
            {
                icon: <FaHtml5 />,
                iconText: 'HTML',
            },
            {
                icon: <FaCss3Alt />,
                iconText: 'CSS'
            },
            {
                icon: <SiJavascript />,
                iconText: 'JS'
            },
        ]
    },
]
