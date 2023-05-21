import PropTypes from "prop-types";
import React, { FunctionComponent, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  icon: FunctionComponent;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  icon: Icon,
  title,
  onClick,
  disabled = false,
}) => {
  const { dark } = useContext(ThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container} ${className} ${!dark && styles.light}`}
    >
      <div>
        <Icon />
        <h6>{title}</h6>
      </div>
      <div />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
