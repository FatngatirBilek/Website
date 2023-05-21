import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useContext, useState } from "react";
import Heading from "../components/Heading";
import { MdLocationOn, MdMoreHoriz, MdWork } from "../components/Icons";
import ThemeContext from "../context/ThemeContext";

interface WorkData {
  allWorkJson: {
    edges: {
      node: {
        id: string;
        title: string;
        subtitle: string;
        period: string;
        location: string;
        specialization: string;
        icon: {
          childImageSharp: {
            fixed: IGatsbyImageData;
          };
        };
      };
    }[];
  };
}

const Work: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const [max, setMax] = useState<number>(2);
  const data = useStaticQuery<WorkData>(graphql`
    {
      allWorkJson {
        edges {
          node {
            id
            title
            subtitle
            period
            location
            specialization
            icon {
              childImageSharp {
                fixed(height: 32) {
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
    <section id="work">
      <Heading icon={MdWork} title="Work" />

      {/* <div className="bg-primary-800 text-white rounded p-6 mb-8 lg:mr-12">
        Announcement
      </div> */}

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allWorkJson.edges.map(({ node }, index) => {
            if (index >= max) return null;

            return (
              <div
                key={node.id}
                className="py-4 flex wow fadeInDown"
                style={{
                  animationDuration: `${index * 200 + 500}ms`,
                }}
              >
                <Tooltip title={`(${node.period})`} placement="left">
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                      dark ? "bg-white" : "bg-primary-500"
                    } duration-200`}
                  />
                </Tooltip>
                <div className="ml-8">
                  <GatsbyImage
                    className="w-auto h-8 object-contain"
                    image={node.icon.childImageSharp.fixed}
                    alt={node.title}
                  />
                  <div className="mt-3 flex items-baseline">
                    <h6 className="font-semibold">{node.title}</h6>
                    <h6 className="text-xs ml-2">({node.period})</h6>
                  </div>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <div className="mt-2 flex items-center">
                    <MdLocationOn size="0.75rem" />
                    <h6 className="font-semibold text-xs ml-2">
                      {node.location}
                    </h6>
                  </div>
                  <h6 className="text-xs mt-2">
                    {/* <strong>Worked with:</strong>*/} {node.specialization}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {max <= 2 && (
        <div className="ml-12 mt-4 rounded-lg py-2 flex">
          <Tooltip title="Load More" placement="right">
            <div className="px-4" onClick={() => setMax(6)}>
              <MdMoreHoriz size="1.5rem" />
            </div>
          </Tooltip>
        </div>
      )}
    </section>
  );
};

export default Work;
