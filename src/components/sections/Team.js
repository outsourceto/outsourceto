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

const Team = ({
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
		title: 'Meet the Team',
		paragraph:
			'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						id="team"
						data={sectionHeader}
						className="center-content"
					/>
					<div className={tilesClasses}>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-1.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									Michael
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">President</a>
								</span>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-2.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									Scottie
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">Developer</a>
								</span>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-3.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									Dennis
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">Power Forward</a>
								</span>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-4.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									Agot
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">Waitress</a>
								</span>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-1.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									James
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">007</a>
								</span>
							</div>
						</div>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="center-content">
								<Image
									src={require('./../../assets/images/img-2.jpg')}
									alt="Features tile icon 01"
									width={350}
									height={350}
								/>
							</div>
							<div className="testimonial-item-footer text-xs mb-0 has-bottom-divider pb-24 center-content">
								<span className="testimonial-item-name text-color-high">
									Ethan
								</span>
								<span className="text-color-low"> / </span>
								<span className="testimonial-item-link">
									<a href="#0">Agent</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
