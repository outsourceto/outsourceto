import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({ className, ...props }) => {
	const classes = classNames('brand', className);

	return (
		<div {...props} className={classes}>
			<h2 className="m-5">
				<Link to="/">
				<Image
				src={require('./../../../assets/images/logo-outsourceto.png')}
				alt="logo"
				width={300}
				height={82}
			/></Link>
			</h2>
		</div>
	);
};

export default Logo;
