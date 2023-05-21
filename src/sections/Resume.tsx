import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import GatsbyImage from "gatsby-plugin-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, IoIosDocument } from "../components/Icons";

interface ResumeData {
  file: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const Resume: React.FC = () => {
  const data = useStaticQuery<ResumeData>(graphql`
    {
      file(relativePath: { eq: "resume/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-2">
          <OutboundLink
            href="https://fatngatirbilek.eu.org/x/intro/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              imgStyle={{ objectPosition: "top" }}
              fluid={data.file.childImageSharp.fluid}
            />
            <span className="sr-only">Preview Resume</span>
          </OutboundLink>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="text-lg lg:text-xl font-semibold">
            If you'd like to check out my Resume, you can access the PDF here!
          </h5>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Preview Resume"
            onClick={() =>
              window.open("https://fatngatirbilek.eu.org/x/intro/Resume.pdf", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
