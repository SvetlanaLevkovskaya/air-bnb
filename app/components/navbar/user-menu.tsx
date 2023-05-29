'use client'
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '@/app/components/avatar';
import { MenuItem } from '@/app/components/navbar/menu-item';
import { useRegisterModal } from '@/app/hooks/use-register-modal';

export const UserMenu = () => {
	const registerModal = useRegisterModal();
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value)
	}, [])


	const relativeContainer = 'relative';
	const container = 'flex flex-row items-center gap-3';
	const button = 'hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
	const menuButton = 'px-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
	const hiddenOnMobile = 'hidden md:block';
	const dropdown = 'absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'
	const dropdownMenu = 'flex flex-col cursor-pointer'


	return (
		<div className={ relativeContainer }>
			<div className={ container }>
				<div
					onClick={ () => {} }
					className={ button }
				>
					Airbnb your home
				</div>
				<div
					onClick={ toggleOpen }
					className={ menuButton }
				>
					<AiOutlineMenu />
					<div className={ hiddenOnMobile }>
						<Avatar />
					</div>
				</div>
			</div>
			{ isOpen && (
				<div className={ dropdown }>
					<div className={ dropdownMenu }>
						<>
							<MenuItem
								onClick={ () => {} }
								label="Login"
							/>
							<MenuItem
								onClick={ registerModal.onOpen }
								label="Sign Up"
							/>
						</>
					</div>
				</div>
			) }
		</div>
	);
};

