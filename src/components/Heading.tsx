import PropTypes from "prop-types";
import React, { FunctionComponent } from "react";

interface HeadingProps {
  icon: React.ComponentType<{ size: string }>;
  title: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ icon: Icon, title }) => {
  return (
    <div className="heading flex items-center pb-8">
      <Icon size="0.875rem" className="mr-2" />
      <h6 className="font-bold uppercase text-sm leading-none">{title}</h6>
    </div>
  );
};

Heading.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
