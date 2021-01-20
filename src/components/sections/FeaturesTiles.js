import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'Possible Industries & Functions',
		paragraph:
			'',
	};

	const sectionHeader2 = {
		title: '',
		paragraph:
			'',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader id="industries" data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-01.svg')}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">eCommerce</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-02.svg')}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Professional services</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-03.svg')}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Insurance</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-04.svg')}
											alt="Features tile icon 04"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Medical Billing</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-05.svg')}
											alt="Features tile icon 05"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Travel</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-06.svg')}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Architectural Services</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader2} className="center-content" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-01.svg')}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Product Listing</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-02.svg')}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Web Development & Design</h4>
									<p className="m-0 text-sm">
										
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-03.svg')}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Search Engine Optimization</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-04.svg')}
											alt="Features tile icon 04"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Social Media Management</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-05.svg')}
											alt="Features tile icon 05"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Customer Service - chat, email and calls</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-06.svg')}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Lead Generation</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
						className="tiles-item reveal-from-bottom"
						data-reveal-delay="400"
					>
						<div className="tiles-item-inner">
							<div className="features-tiles-item-header">
								<div className="features-tiles-item-image mb-16">
									<Image
										src={require('./../../assets/images/feature-tile-icon-06.svg')}
										alt="Features tile icon 06"
										width={64}
										height={64}
									/>
								</div>
							</div>
							<div className="features-tiles-item-content">
								<h4 className="mt-0 mb-8">Appointment Setting</h4>
								<p className="m-0 text-sm">
								
								</p>
							</div>
						</div>
					</div>

					<div
					className="tiles-item reveal-from-bottom"
					data-reveal-delay="400"
				>
					<div className="tiles-item-inner">
						<div className="features-tiles-item-header">
							<div className="features-tiles-item-image mb-16">
								<Image
									src={require('./../../assets/images/feature-tile-icon-06.svg')}
									alt="Features tile icon 06"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<div className="features-tiles-item-content">
							<h4 className="mt-0 mb-8">Reservation Services</h4>
							<p className="m-0 text-sm">
							
							</p>
						</div>
					</div>
				</div>

				<div
				className="tiles-item reveal-from-bottom"
				data-reveal-delay="400"
			>
				<div className="tiles-item-inner">
					<div className="features-tiles-item-header">
						<div className="features-tiles-item-image mb-16">
							<Image
								src={require('./../../assets/images/feature-tile-icon-06.svg')}
								alt="Features tile icon 06"
								width={64}
								height={64}
							/>
						</div>
					</div>
					<div className="features-tiles-item-content">
						<h4 className="mt-0 mb-8">Insurance Policy Management, Renewal Monitoring</h4>
						<p className="m-0 text-sm">
							
						</p>
					</div>
				</div>
			</div>

			<div
			className="tiles-item reveal-from-bottom"
			data-reveal-delay="400"
		>
			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
						<Image
							src={require('./../../assets/images/feature-tile-icon-06.svg')}
							alt="Features tile icon 06"
							width={64}
							height={64}
						/>
					</div>
				</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">Technician Appointment Coordination</h4>
					<p className="m-0 text-sm">
					
					</p>
				</div>
			</div>
		</div>

		<div
		className="tiles-item reveal-from-bottom"
		data-reveal-delay="400"
		>
			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
						<Image
							src={require('./../../assets/images/feature-tile-icon-06.svg')}
							alt="Features tile icon 06"
							width={64}
							height={64}
						/>
					</div>
				</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">Draftsmen and Animators</h4>
					<p className="m-0 text-sm">
					
					</p>
				</div>
			</div>
		</div>

							<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
							>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-06.svg')}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Graphic Design</h4>
									<p className="m-0 text-sm">
									
									</p>
								</div>
							</div>
						</div>

						<div
						className="tiles-item reveal-from-bottom"
						data-reveal-delay="400"
						>
						<div className="tiles-item-inner">
							<div className="features-tiles-item-header">
								<div className="features-tiles-item-image mb-16">
									<Image
										src={require('./../../assets/images/feature-tile-icon-06.svg')}
										alt="Features tile icon 06"
										width={64}
										height={64}
									/>
								</div>
							</div>
							<div className="features-tiles-item-content">
								<h4 className="mt-0 mb-8">Order Taking & Management</h4>
								<p className="m-0 text-sm">
								
								</p>
							</div>
						</div>
						</div>

						<div
						className="tiles-item reveal-from-bottom"
						data-reveal-delay="400"
						>
						<div className="tiles-item-inner">
							<div className="features-tiles-item-header">
								<div className="features-tiles-item-image mb-16">
									<Image
										src={require('./../../assets/images/feature-tile-icon-06.svg')}
										alt="Features tile icon 06"
										width={64}
										height={64}
									/>
								</div>
							</div>
							<div className="features-tiles-item-content">
								<h4 className="mt-0 mb-8">General Administrative Work</h4>
								<p className="m-0 text-sm">
								
								</p>
							</div>
						</div>
						</div>

		

		
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
