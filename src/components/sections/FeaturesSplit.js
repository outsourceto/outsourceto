import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
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
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: 'WHY VIRTUAL STAFFING',
		paragraph:
			'',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="why"
						data={sectionHeader}
						className="center-content"
					/>
					<div className={splitClasses}>
						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								
								<h3 className="mt-0 mb-12">Are you having these challenges?</h3>
								<p className="m-0">
								<ul>
									<li>
										Sourcing the right TALENT?
									</li>
									<li>
										Starting or Scaling due to COSTS?
									</li>
									<li>
										MANAGING some functions that may not be core to your business?
									</li>
									<li>
										SPACE has been costly/restrictive?
									</li>
								</ul>
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require('./../../assets/images/challenges.jpg')}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>
						<div className="split-item">
						<div
							className={classNames(
								'split-item-image center-content-mobile reveal-from-bottom',
								imageFill && 'split-item-image-fill'
							)}
							data-reveal-container=".split-item"
						>
							<Image
								src={require('./../../assets/images/phil2.jpg')}
								alt="Features split 01"
								width={528}
								height={396}
							/>
						</div>
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								
								<h3 className="mt-0 mb-12">The Philippines</h3>
								<p className="m-0">
								<ul>
									<li>
										600,000 ++ college graduates annually.
									</li>
									<li>
										14 Million Filipinos speak English.
									</li>
									<li>
										1.3 Million professionals in the Outsourcing industry.
									</li>
									<li>
										Abundance of workspaces.
									</li>
								</ul>
								</p>
							</div>
	
						</div>



						<div className="split-item">
						<div
							className="split-item-content center-content-mobile reveal-from-left"
							data-reveal-container=".split-item"
						>
							
							<h3 className="mt-0 mb-12">Our Service Commitment</h3>
							<p className="m-0">
							<ul>
								<li>
									Workstations
								</li>
								<li>
									Talent sourcing and matching
								</li>
								<li>
									Supervision
								</li>
								<li>
									Redundancy
								</li>
								<li>
									Training Support
								</li>
								<li>
									Payroll Management
								</li>
							</ul>
							</p>
						</div>
						<div
							className={classNames(
								'split-item-image center-content-mobile reveal-from-bottom',
								imageFill && 'split-item-image-fill'
							)}
							data-reveal-container=".split-item"
						>
							<Image
								src={require('./../../assets/images/service.jpg')}
								alt="Features split 01"
								width={528}
								height={396}
							/>
						</div>
					</div>





						<div className="split-item">
						<div
							className={classNames(
								'split-item-image center-content-mobile reveal-from-bottom',
								imageFill && 'split-item-image-fill'
							)}
							data-reveal-container=".split-item"
						>
							<Image
								src={require('./../../assets/images/price.jpg')}
								alt="Features split 01"
								width={528}
								height={396}
							/>
						</div>
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								
								<h3 className="mt-0 mb-12">Factors that Affect Pricing</h3>
								<p className="m-0">
								<ul>
									<li>
										Managed-service vs. Recruitment Service
									</li>
									<li>
										Fully-loaded workstation vs home-based set up
									</li>
									<li>
										Volume
									</li>
									<li>
										Skill level
									</li>
									<li>
										Job function
									</li>
									<li>
										Administrative Services
										<ul>
											<li>
												Payroll
											</li>
											<li>
												Business compliances
											</li>
										</ul>
									</li>
								</ul>
								</p>
							</div>
	
						</div>

						<div className="split-item">
						<div
							className="split-item-content center-content-mobile reveal-from-left"
							data-reveal-container=".split-item"
						>
							
							<h3 className="mt-0 mb-12">Some Points to Consider with a Philippine Workforce</h3>
							<p className="m-0">
							<ul>
								<li>
									8 hour shifts with 1 hour break time, total of 9 hours at work.
								</li>
								<li>
									Best to have 5 day work week as outsourcing industry practice.
								</li>
								<li>
								New hires have a 6 month probationary period after which they become “regular” employees with benefits such as health insurance.
								</li>
								<li>
									13 th month pay bonus.
								</li>
								
							</ul>
							</p>
						</div>
						<div
							className={classNames(
								'split-item-image center-content-mobile reveal-from-bottom',
								imageFill && 'split-item-image-fill'
							)}
							data-reveal-container=".split-item"
						>
							<Image
								src={require('./../../assets/images/workforce.jpg')}
								alt="Features split 01"
								width={528}
								height={396}
							/>
						</div>
					</div>


						<div className="split-item">
					<div
						className={classNames(
							'split-item-image center-content-mobile reveal-from-bottom',
							imageFill && 'split-item-image-fill'
						)}
						data-reveal-container=".split-item"
					>
						<Image
							src={require('./../../assets/images/people.jpg')}
							alt="Features split 01"
							width={528}
							height={396}
						/>
					</div>
						<div
							className="split-item-content center-content-mobile reveal-from-left"
							data-reveal-container=".split-item"
						>
							
							<h3 className="mt-0 mb-12">Our People</h3>
							<p className="m-0">
							<ul>
								<li>
									Experienced leaders in the outsourcing industry.
								</li>
								<li>
									Diverse industry experience
								</li>
								<li>
									Quality manage focus
								</li>
								<li>
									Training & development.
								</li>
								<li>
									Financial Management
								</li>
								<li>
									HR and Payroll Services
								</li>
							</ul>
							</p>
						</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
