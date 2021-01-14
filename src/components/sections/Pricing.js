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
		title: 'Pricing',
		paragraph:
			'',
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
									<h5 className="mt-0 mb-0">Back-office (non-technical)</h5>
									<p className="text-sm mb-12">Data entry, product listers</p>			
									<h3 className="mt-0 mb-12">$1,144.00/month ($6.50/hr)</h3>							
														
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
									<h5 className="mt-0 mb-0">Back-office (technical)</h5>
									<p className="text-sm mb-12">Medical Billing, Accounting, eCommerce specialists, Graphic Artists</p>			
									<h3 className="mt-0 mb-12">$1,450.00/month ($8.25/hr)</h3>							
														
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
									<h5 className="mt-0 mb-0">Customer Service (voice, email or chat)</h5>
									<p className="text-sm mb-12">Appointment setting, In-bound calls, Travel Reservations</p>			
									<h3 className="mt-0 mb-12">$1,450.00/month ($8.25/hr)</h3>							
														
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
									<h5 className="mt-0 mb-0">Customer Service (voice, IT or Engineering Technical)</h5>
									<p className="text-sm mb-12">Technical Support</p>			
									<h3 className="mt-0 mb-12">$1,600.00/month ($9.10/hr)</h3>							
														
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
									<h5 className="mt-0 mb-0">Other technical positions</h5>
									<p className="text-sm mb-12">Draftsmen, programmer</p>			
									<h3 className="mt-0 mb-12">Starts at $2,000</h3>							
														
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
									<Button tag="a" color="primary" wideMobile href="#">
										Get started
									</Button>
								</div>
							</div>
						</div>
						
					</div>
					<h5 className="mt-10 mb-0">Pricing is subject to change without prior notice. These are estimates to guide decision making. Includes all facilities needed to operate (workstation, fiber internet connection, salaries and benefits, administrative services.)</h5>
				</div>
				
			</div>
		</section>
	);
};

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
