import React from 'react';
import { TypeAnimation as Animation } from 'react-type-animation';

const TypeAnimation = () => {
	return (
		<Animation
			sequence={[
				'',
				1300,
				'Nic',
				1500,
				'Software Developer',
				1500,
				'Electrical Engineer',
				1500,
				'Nic',
			]}
			wrapper="span"
			speed={50}
			repeat={0}
		/>
	);
};

export default TypeAnimation;
