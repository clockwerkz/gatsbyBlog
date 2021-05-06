import * as React from "react"
import { Link } from "gatsby";
import Footer from '../components/footer';
import Header from '../components/header';
const IndexPage = () => {
  return (
   <div>
     <Header />
     <h1>Hello.</h1>
     <p>I'm Carlos, a full-stack developer living in Irvine, California.</p>
     <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
     <Footer />
   </div>
  )
}

export default IndexPage
