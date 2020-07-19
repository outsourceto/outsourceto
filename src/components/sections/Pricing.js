import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};

const Pricing = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Our Pricing',
		paragraph:
			'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="pricing"
						data={sectionHeader}
						className="center-content"
					/>
					<div className={tilesClasses}>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="center-content">
									<h5 className="mt-0 mb-12">Basic</h5>
									<h3 className="mt-0 mb-12">$300.90</h3>
									<p className="text-sm mb-0">BILLING PER MONTH</p>
									<p className="text-sm mb-0">Bandwidth: 1GB</p>
									<p className="text-sm mb-0">No Hidden Fees</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
									<Button tag="a" color="primary" wideMobile href="#">
										Get started
									</Button>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="center-content">
									<h5 className="mt-0 mb-12">Advance</h5>
									<h3 className="mt-0 mb-12">$800.90</h3>
									<p className="text-sm mb-0">BILLING PER MONTH</p>
									<p className="text-sm mb-0">Bandwidth: 1GB</p>
									<p className="text-sm mb-0">No Hidden Fees</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
									<Button tag="a" color="primary" wideMobile href="#">
										Get started
									</Button>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="center-content">
									<h5 className="mt-0 mb-12">Expert</h5>
									<h3 className="mt-0 mb-12">$1500.90</h3>
									<p className="text-sm mb-0">BILLING PER MONTH</p>
									<p className="text-sm mb-0">Bandwidth: 1GB</p>
									<p className="text-sm mb-0">No Hidden Fees</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
									<Button tag="a" color="primary" wideMobile href="#">
										Get started
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
