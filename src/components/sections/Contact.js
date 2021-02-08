import React,{ useState,useEffect } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';


const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const Contact = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: 'Contact Us',
		paragraph: '',
	};

	 const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

	return (
		<section {...props} className={outerClasses}>
		{success && (
			<p style={{ color: "green" }}>Thanks for your message! </p>
		  )}
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="contact"
						data={sectionHeader}
						className="center-content"
					/>
					<div className={splitClasses}>
						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Email:
								</div>								
								<p className="mb-32"><a href="mailto:Contact@outsourceto.us">Contact@outsourceto.us</a></p>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Skype:
								</div>
								<p className="mb-32">LPATLDS</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item"
							>
							<form 
							name="contact" 
							method="POST" 
							data-netlify="true" 
						   >
						  <input type="hidden" name="form-name" value="contact" />						

							 <Input
							 type="text"
							 labelHidden
							 placeholder="Name"
							 className="mb-16"
							 name="name"
						 />

						 <Input
							 type="email"
							 labelHidden
							 placeholder="Email"
							 className="mb-16"
							 name="email"
						 />

						 <Input
							 type="text"
							 labelHidden
							 placeholder="Subject"
							 className="mb-16"
							 name="subject"
						 />

						 <Input
							 type="textarea"
							 labelHidden
							 placeholder="Message"
							 className="mb-16"
							 name="message"
						 />
						 <Button type="submit" color="primary" wideMobile >
						 Send
					 </Button>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
