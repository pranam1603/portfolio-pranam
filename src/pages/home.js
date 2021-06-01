import React from 'react'

import {
    Tabs,
    About,
    FeaturedProducts,
    Mailbox,
    Tools,
    Bloghome,
    Hero,
    Skills,
} from '../components'

const home = () => {

    return (
        <>
            <Hero />
            <Skills />
            <About />
            <Tabs />
            <FeaturedProducts />
            <Tools />
            <Bloghome />
            <Mailbox />
        </>
    )
}

export default home
