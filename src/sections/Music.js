import React from "react";
import Heading from "../components/Heading";
import { MdMusicNote } from "../components/Icons";
import { graphql, useStaticQuery } from "gatsby";

const Music = () => {
  const data = useStaticQuery(graphql`
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

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0q6VR7BTYQwUHR1qebuiq5?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
  );
};

export default Music;
