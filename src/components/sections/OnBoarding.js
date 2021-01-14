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

const OnBoarding = ({
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
		title: '7-Step Client On-boarding Process',
		paragraph: '',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="step"
						data={sectionHeader}
						className="center-content"
					/>
					<table>
						<tr>
							<th>Phases</th>
							<th>Phase Objective(s)</th>
							<th>Client Responsibilities</th>
						</tr>
						<tr>
							<td>Process Assessment Interview</td>
							<td>Understand client needs and determine workability of outsourcing the task</td>
							<td>Client to discuss and demonstrate tasks.</td>
						</tr>
						<tr>
							<td>Proposal Submission</td>
							<td>Document all identified needs and expectation from both parties.</td>
							<td>
							Evaluate proposal<br />
							Sign the proposal if approved</td>
						</tr>
						<tr>
							<td>Service Level Agreement</td>
							<td>Establish measures of success.</td>
							<td>Client works with our team to define success
							factors and levels.</td>
						</tr>
						<tr>
							<td>Agreement Signing</td>
							<td>Formalize all agreements and commitments.</td>
							<td>Sign the agreement<br />
							Pay Reservation Fee of $300 (refundable within
								4 weeks if sourcing has no satisfactory
								progress).<br />
								Client Orientation</td>
						</tr>
						<tr>
							<td>Sourcing</td>
							<td>
							Find and match the right candidate(s).<br />
							Provide 2 to 3 options for client selection.
							</td>
							<td>Client works with provider on test projects and
							assessments.</td>
						</tr>
						<tr>
							<td>Onboarding</td>
							<td>Hire suitable candidate.<br />
							Develop training materials and process documents with client.<br />
							Train candidate according to training plan.
							</td>
							<td>Work with provider on training materials.
							<br />
							Perform simulated runs on the tasks to ensure
							alignment
							<br />
							Pay 1 month advance equal to the anticipated
							salary.</td>
						</tr>
						<tr>
							<td>Project Pilot Run (Go Live)</td>
							<td>
							Test run the process agreed.<br />
							Monitor performance of the staff.
							</td>
							<td>Receive reports.<br />
							Provide feedback through the assigned supervisor.
							</td>
						</tr>
						</table>
					</div>
			</div>
		</section>
	);
};

OnBoarding.propTypes = propTypes;
OnBoarding.defaultProps = defaultProps;

export default OnBoarding;
