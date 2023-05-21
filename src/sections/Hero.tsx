import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Parallax from "parallax-js";
import React, { useEffect, useRef, useState } from "react";
import Subtitle from "../components/Subtitle";
import styles from "./Hero.module.css";

interface HeroData {
  photo: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState<Parallax | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery<HeroData>(graphql`
    {
      photo: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current!, {
          invertX: false,
          invertY: false,
        })
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  const imageData = getImage(data.photo.childImageSharp.fluid);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-lg mx-auto" data-depth="0.4">
            <GatsbyImage image={imageData} alt="Photo" />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="sr-only">
            Fathir's Home on the Web
            Orang paling keren di sekolah
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <h1 className={`${styles.header} leading-tight`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-700 via-blue-500 to-teal-400">
                Hi, I'm Fathir
              </span>{" "}
              <br />
            </h1>

            <Subtitle onDone={() => setShowSocial(true)} />

            {/* <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
