import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  const wrapperClassName = dark ? styles.dark : styles.light;

  return (
    <div className={wrapperClassName}>
      <SEO />
      <Navigation />
      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </div>
  );
};

export default Wrapper;
