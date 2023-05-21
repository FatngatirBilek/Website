import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { FaAngleRight, FaAward } from "../components/Icons";
import styles from "./Meta.module.css";

interface AchievementNode {
  node: {
    id: string;
    title: string;
    subtitle: string;
  };
}

interface AchievementsData {
  allAchievementsJson: {
    edges: AchievementNode[];
  };
}

const Achievements: React.FC = () => {
  const data = useStaticQuery<AchievementsData>(graphql`
    {
      allAchievementsJson {
        edges {
          node {
            id
            title
            subtitle
          }
        }
      }
    }
  `);

  return (
    <section id="achievements">
      <Heading icon={FaAward} title="Achievements" />

      {data.allAchievementsJson.edges.map(({ node }, index) => (
        <div
          key={node.id}
          className={`${styles.container} wow fadeInDown`}
          style={{
            animationDuration: `${index * 200 + 500}ms`,
          }}
        >
          <div className="mt-1 pr-6">
            <FaAngleRight />
          </div>
          <div>
            <h6 className="font-semibold">{node.title}</h6>
            <p className="text-sm">{node.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
