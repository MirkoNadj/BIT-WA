import React, {Fragment} from 'react';
import Header from './Header'
import AboutContent from './AboutContent'
import {Footer} from './Footer'

const About = (props) => {
    return (
        <Fragment>
            <Header />
            <AboutContent title={props.match.params.title} />
            <Footer />
        </Fragment>
    )
}        

export default About;