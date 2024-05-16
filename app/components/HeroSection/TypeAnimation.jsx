import React from 'react';
import { TypeAnimation as Animation } from 'react-type-animation';

const TypeAnimation = () => {
	return (
		<Animation
			sequence={['', 1300, 'Nic', 3000, 'Software Developer', 2000]}
			wrapper="span"
			speed={40}
			repeat={0}
		/>
	);
};

export default TypeAnimation;
