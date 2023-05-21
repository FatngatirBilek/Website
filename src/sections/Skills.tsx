import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Heading from "../components/Heading";
import { GoTools } from "../components/Icons";
import styles from "./Skills.module.css";

interface SkillData {
  allSkillsJson: {
    edges: {
      node: {
        id: string;
        name: string;
        tech: string;
        icon: {
          childImageSharp: {
            fixed: IGatsbyImageData;
          };
        };
      };
    }[];
  };
}

const Skills: React.FC = () => {
  const data = useStaticQuery<SkillData>(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon {
              childImageSharp {
                fixed(width: 20, height: 20) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="skills">
      <Heading icon={GoTools} title="Experiences" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.skill} md:mr-5 wow fadeIn`}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <div className="flex items-center">
              <GatsbyImage
                className="w-5 h-5 mr-5"
                image={node.icon.childImageSharp.fixed}
                alt={node.name}
              />
              <div>
                <h6 className="text-xs font-semibold leading-none">
                  {node.name}
                </h6>
                <h6
                  className="mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                  {node.tech}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
