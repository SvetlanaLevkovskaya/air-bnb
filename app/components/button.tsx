'use client'
import React, { FC } from 'react';
import { IconType } from 'react-icons';


type ButtonType = {
	label: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | null
	disabled?: boolean
	outline?: boolean
	small?: boolean
	icon?: IconType
}
export const Button: FC<ButtonType> = ({
																				 label,
																				 onClick,
																				 disabled,
																				 outline,
																				 small,
																				 icon: Icon
}) => {
	const buttonClass = `
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outline ? 'bg-white' : 'bg-rose-500'}
    ${outline ? 'border-black' : 'border-rose-500'}
    ${outline ? 'text-black' : 'text-white'}
    ${small ? 'py-1' : 'py-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'font-light' : 'font-semi-bold'}
    ${small ? 'border-[1px]' : 'border-2'}
  `;

	const iconClass = `
    absolute
    left-4
    top-3
  `;

	return (
		<button
			onClick={ onClick }
			disabled={ disabled }
			className={buttonClass}>
			{ Icon && (
				<Icon size={ 24 }
							className={iconClass} />
			) }
			{ label }
		</button>
	);
};

