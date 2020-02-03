import React from 'react';
import { iconsConfig } from '../../iconsConfig';

const Icon = ({ name, size, color }) => {
	const IconComponent = iconsConfig[name];
	return <IconComponent size={size} color={color} />;
};

export default Icon;
