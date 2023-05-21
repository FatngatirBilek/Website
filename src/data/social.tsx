import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
} from "../components/Icons";

interface SocialItem {
  title: string;
  icon: React.ElementType;
  link: string;
  class: string;
}

const social: SocialItem[] = [
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: "https://github.com/fatngatirbilek",
    class: "bg-github",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/fathirbimashabri",
    class: "bg-instagram",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/fatngatirbilek",
    class: "bg-linkedin",
  },
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: "https://facebook.com/Fatngatirbilek",
    class: "bg-facebook",
  },
];

export default social;
