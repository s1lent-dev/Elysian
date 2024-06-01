import { Founder } from "../../../../types/types";
import { Link } from "react-router-dom";
import {
  LinkedinLogo,
  MetaLogo,
  XLogo,
  GithubLogo,
} from "@phosphor-icons/react";

const SingleFounder = ({
  name,
  title,
  photo,
  desc,
  linkedin,
  twitter,
  github,
  meta,
}: Founder) => {

  return (
    <div className="singlefounder">
      <div className="info">
        <div className="content">
          <h2>{name}</h2>
          <span>{title}</span>
        </div>
        <div className="img">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="line"/>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="social">
        <Link to={linkedin}>
          <LinkedinLogo size={24} />
        </Link>
        <Link to={meta}>
          <MetaLogo size={24} />
        </Link>
        <Link to={twitter}>
          <XLogo size={24} />
        </Link>
        <Link to={github}>
          <GithubLogo size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SingleFounder;
