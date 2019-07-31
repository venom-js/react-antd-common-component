/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
interface LinkProps {
  href: string;
  text: string;
}
const Link: React.FC<LinkProps> = props => {
  return (
    <a href={props.href} target="_blank">
      {props.text}
    </a>
  );
};
export default Link;
