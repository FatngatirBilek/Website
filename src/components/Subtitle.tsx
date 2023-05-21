import React from "react";
import Typist from "react-typist-component";

interface SubtitleProps {
  onDone: () => void;
}

const Subtitle: React.FC<SubtitleProps> = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={30}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">{"<?php"}</span>
      </div>
      <div>
        <span className="text-blue-600">function</span>{" "}
        <span className="text-orange-400">FatngatirBilek</span>
        (){"{"}
      </div>
      <div className="lg:pl-8">
        <span className="text-blue-600">echo</span>{" "}
        <span className="text-red-500">Developer</span>,{" "}
        <span className="text-red-500">Student</span>,{" "}
        <span className="text-red-500">IT Enthusiast</span>,{" "}
        <span className="text-red-500">Reader</span>;{" "}
      </div>
      <div>{"}"}</div>
      <div className="lg:pl-8">
        <span className="text-orange-400">FatngatirBilek</span>();{" "}
      </div>
      <div>
        <span className="text-blue-600">{"?>"}</span>
      </div>
    </code>
  </Typist>
);

export default Subtitle;
