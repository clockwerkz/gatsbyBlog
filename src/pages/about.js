import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Page</h1>
            <p>I currently tutor on the Wyzant Platform.</p>
            <p>Interested in working with me? <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}


export default AboutPage;