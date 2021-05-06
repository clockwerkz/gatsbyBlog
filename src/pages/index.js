import * as React from "react"
import { Link } from "gatsby";

const IndexPage = () => {
  return (
   <div>
     <h1>Hello.</h1>
     <p>I'm Carlos, a full-stack developer living in Irvine, California.</p>
     <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
   </div>
  )
}

export default IndexPage
