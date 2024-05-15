'use client';
import React from 'react';
import { TypeAnimation as Animation } from 'react-type-animation';

const TypeAnimation = () => {
	return (
		<Animation
			sequence={['Nic', 2000, 'Software Developer', 2000]}
			wrapper="span"
			speed={20}
			repeat={Infinity}
		/>
	);
};

export default TypeAnimation;
