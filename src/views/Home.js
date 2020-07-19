import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/>
			<Testimonial topDivider />
			<Cta split />
			<Pricing topDivider />
			<Team topDivider />
			<Contact topDivider />
		</>
	);
};

export default Home;
