import React from 'react';
import { Link } from 'gatsby';
const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>I currently tutor on the Wyzant Platform.</p>
            <p>Interested in working with me? <Link to="/contact">Contact me.</Link></p>
        </div>
    )
}


export default AboutPage;