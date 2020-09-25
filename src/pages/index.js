import React from "react"
import PageLayout from "../components/page-layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const IndexPage = props => (
  <BackgroundImage
    style={{ backgroundPosition: "bottom center", backgroundSize: "cover" }}
    fluid={props.data.imageMorganBackground.childImageSharp.fluid}
  >
    <PageLayout>
      <div className="top-container">
        <div className="box-image">
          <Img fluid={props.data.imageMorgan.childImageSharp.fluid} />
        </div>
        <div className="box">
          <h1>Hi, I'm Morgan</h1>
          <p className="large-text">
            I help <span style={{ fontWeight: "bold" }}>thousands</span> of
            students learn programming in a{" "}
            <span style={{ fontWeight: "bold" }}>fun</span> and <span style={{ fontWeight: "bold" }}>interactive</span> way.
          </p>
          <p>
            It shouldn't take years of studying before you get to deploy your own web application. In fact it can take as little as a three hours to go from no code to deployment of your first web application on a site that the whole world can see.
          </p>
          <p>
            Maybe you have a great idea for a start-up but can't afford to hire a team of programmers to test your idea. This course will show you how, by utilising the latest technologies, you can go from zero to hero and kick-start your start-up idea yourself.
          </p>
          <p>
            In this course I will be with you every step of the way, helping you implement your start-up idea and saving you thousands of dollars in the process.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a className="btn-grad btn-large" href="#about">
              GET STARTED NOW
            </a>
          </div>
        </div>
      
      
      </div>
      <div className="drop-shadow">
          <h1>Can I really create my own 'web app' so quickly?</h1>
          <p>You may be wondering, 'Could I really create & deploy my own web application in a few hours?'</p>
          <p>The answer is a resounding yes!</p>
          <p>While many courses demand that you become an expert at <span style={{ fontWeight: "bold" }}>javascript, python, html & css</span> before you are deemed worthy of creating a useful app, I take a <span style={{ fontWeight: "bold" }}>different approach</span> .</p>
          <p>
            Just like how you only really learn how to drive a car properly once you have past your test and are driving your own car every day, the same goes for app development.
          </p>
          <p>You only really learn a technology like python when you use it to create your own apps. Simple isn't it!</p>

          <p>So this is what you are going to do, create your own 'web app'.</p>
          <p>Scared? Don't be. I will be with you every step of the way.</p>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <a className="btn-grad btn-medium" href="#about">
              GET STARTED NOW
            </a>
          </div>

      </div>
    </PageLayout>
  </BackgroundImage>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageMorgan: file(relativePath: { eq: "morgan-radial.png" }) {
      ...fluidImage
    }
    imageMorganBackground: file(relativePath: { eq: "desk.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`
