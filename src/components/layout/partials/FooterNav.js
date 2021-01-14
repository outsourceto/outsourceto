import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Industries and Functions</Link>
        </li>
        <li>
          <Link to="#0">Why Virtual Staffing</Link>
        </li>
        <li>
          <Link to="#0">About</Link>
        </li>
        <li>
          <Link to="#0">7-Step</Link>
        </li>
        <li>
          <Link to="#0">Pricing</Link>
        </li>
        <li>
          <Link to="#0">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;