import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ServiceCommitment from '../components/sections/ServiceCommitment';
import Testimonial from '../components/sections/Testimonial';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import OnBoarding from '../components/sections/OnBoarding';
import Partnership from '../components/sections/Partnership';
import About from '../components/sections/About';
import ScrollUpButton from "react-scroll-up-button";

const Home = () => {
	return (
		<>
			<ScrollUpButton />
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/>			
			<ServiceCommitment
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/>
			<About />
			<OnBoarding />			
			<Pricing topDivider />			
			<Contact topDivider />
		</>
	);
};

export default Home;
