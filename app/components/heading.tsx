'use client'

import React, { FC } from 'react';


type HeadingType = {
	title: string
	subtitle?: string
	center?: boolean
}
export const Heading: FC<HeadingType> = ({ title, center, subtitle }) => {

	const textCenter = 'text-center';
	const textStart = 'text-start';
	const headingTitle = 'text-2xl font-bold';
	const subtitleStyle = 'font-light text-neutral-500 mt-2';

	return (
		<div className={ center ? textCenter : textStart }>
			<div className={ headingTitle }>{ title }</div>
			{ subtitle && <div className={ subtitleStyle }>{ subtitle }</div> }
		</div>
	);
};

