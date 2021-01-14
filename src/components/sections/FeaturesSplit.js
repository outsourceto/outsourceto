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
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
