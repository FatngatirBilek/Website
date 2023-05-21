import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { MdMusicNote } from "../components/Icons";

interface MusicData {
  markdownRemark: {
    html: string;
  };
}

const Music: React.FC = () => {
  const data = useStaticQuery<MusicData>(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "music" } }) {
        html
      }
    }
  `);

  return (
    <section id="music">
      <Heading icon={MdMusicNote} title="Music" />

      <div
        className="text-justify lg:col-span-4 wow fadeIn"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <iframe
        src="https://open.spotify.com/embed/track/7F6PtLP6fJPVtA1FWVkl8K?utm_source=generator"
        width="100%"
        height="500"
        frameBorder="0"
        className="mt-5"
        allowTransparency={true}
        allow="encrypted-media"
      ></iframe>
    </section>
  );
};

export default Music;
