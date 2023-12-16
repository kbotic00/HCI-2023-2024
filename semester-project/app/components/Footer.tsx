import { FC } from "react";

interface FooterProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const Footer: FC<FooterProps> = ({ pages }) => {
  return <div>Footer here soon</div>;
};

export default Footer;