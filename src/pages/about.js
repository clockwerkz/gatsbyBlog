import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>I currently tutor on the Wyzant Platform.</p>
            <p>Interested in working with me? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}


export default AboutPage;