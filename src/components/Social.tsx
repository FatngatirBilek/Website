import Tooltip from "@mui/material/Tooltip";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import social from "../data/social";
import styles from "./Social.module.css";

interface SocialItem {
  title: string;
  icon: React.ComponentType<{ color: string; size: string }>;
  link: string;
  class: string;
}

const Social: React.FC = () => {
  return (
    <div className={styles.container}>
      {social.map((x: SocialItem, i: number) => {
        const Icon = x.icon;

        return (
          <Tooltip key={x.title} title={x.title} placement="bottom">
            <OutboundLink
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${x.class}`}
            >
              <Icon color="#FFF" size="0.9em" />
              <span className="sr-only">{x.title}</span>
            </OutboundLink>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Social;
