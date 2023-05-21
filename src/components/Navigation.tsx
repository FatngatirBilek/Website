import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import { IoIosMoon, IoIosSunny } from "./Icons";
import styles from "./Navigation.module.css";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark, toggleDark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 32, height: 32)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = (id: string) =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink: React.FC<{ id: string; icon: React.ComponentType }> = ({
    id,
    icon: Icon,
  }) => {
    return (
      <Tooltip title={id} placement="right" arrow>
        <div key={id} onClick={() => scrollTo(id)}>
          <Icon />
        </div>
      </Tooltip>
    );
  };

  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <div className="flex-center cursor-pointer" onClick={scrollToTop}>
        <GatsbyImage
          className="grayscale"
          image={data.icon.childImageSharp.gatsbyImageData as IGatsbyImageData}
          alt="Logo"
        />
      </div>

      <div className="flex-center cursor-pointer hover:text-primary-500" onClick={toggleDark}>
        {dark ? <IoIosSunny /> : <IoIosMoon />}
      </div>
    </div>
  );
};

export default Navigation;
