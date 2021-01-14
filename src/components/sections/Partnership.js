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

const Partnership = ({
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
		title: 'Possible Partnership',
		paragraph: '',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="contact"
						data={sectionHeader}
						className="center-content"
					/>
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

Partnership.propTypes = propTypes;
Partnership.defaultProps = defaultProps;

export default Partnership;
