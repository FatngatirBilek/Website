import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle } from "../components/Icons";
import Social from "../components/Social";

interface FooterData {
  markdownRemark: {
    html: string;
  };
}

const Footer: React.FC = () => {
  const data = useStaticQuery<FooterData>(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-fathir" } }) {
        html
      }
    }
  `);

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="About fatngatirbilek.eu.org" />

      <div
        className="text-justify w-full md:w-4/5 lg:w-3/4 wow fadeIn -mb-4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <div className="w-full md:w-auto h-6 my-6">
        {<Social />}
      </div>

      {/* <Button
        className="mt-6"
        icon={FaStar}
        title="Check it out on Github!"
        onClick={() =>
          window.open(
            "https://github.com/Novatorem/Website",
            "_blank",
          )
        }
      /> */}

      <div className="pt-8 pb-8 text-xs leading-relaxed opacity-25">
        <div>Made With ❤️ by Fathir</div>
      </div>
    </section>
  );
};

export default Footer;
