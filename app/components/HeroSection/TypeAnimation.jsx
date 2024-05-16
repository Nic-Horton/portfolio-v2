import React from 'react';
import { TypeAnimation as Animation } from 'react-type-animation';

const TypeAnimation = () => {
	return (
		<Animation
			sequence={['', 1300, 'Nic', 2000, 'Software Developer', 2000, 'Nic']}
			wrapper="span"
			speed={50}
			repeat={0}
		/>
	);
};

export default TypeAnimation;
