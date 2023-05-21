import React from "react";
import Wrapper from "../components/Wrapper";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Music from "../sections/Music";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`${styles.container} ${styles.layout}`}> {/* Use styles object to access CSS classes */}
        <Hero />
        <Projects />
        <Skills />
        <div className={`${styles.layout} ${styles.workEducation}`}> {/* Use styles object to access CSS classes */}
          <Work />
          <Education />
        </div>
        <Music />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
