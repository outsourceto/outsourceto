import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const About = ({
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
		title: 'OutsourceTo.us',
		paragraph: '',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="about"
						data={sectionHeader}
						className="center-content"
					/>
					<p>A cooperative with a mission to help independent contractors in the outsourcing
					industry. We provide services on legal services, payroll, recruitment, business
					development and operations management for both clients and independent
					contractors.</p>

					<p>We ensure that member
					workers are fairly treated with their employment
					arrangements all statutory benefits are in place, as well as provide cost effective
					health and insurance benefits.</p>

					<h2 className="center-content">Possible Partnership</h2>
					<table>
						<tr>
							<th>Partnership</th>
							<th>Income Stream</th>						
						</tr>
						<tr>
							<td>Client seeking virtual staff/teams (either managed or home based)</td>
							<td>Cost reduction on operations</td>							
						</tr>
						<tr>
							<td>Investors establish an outsourcing service center</td>
							<td>Revenue/Profit Sharing</td>						
						</tr>
						<tr>
							<td>Sales refer clients</td>
							<td>On going commission as long as the project is live (5%)</td>					
						</tr>
					</table>
					
					
					</div>


			</div>
		</section>
	);
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
