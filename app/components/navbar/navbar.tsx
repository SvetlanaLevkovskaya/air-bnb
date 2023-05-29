'use client'
import React from 'react';
import { Container } from '@/app/components/container';
import { Logo } from '@/app/components/navbar/logo';
import { Search } from '@/app/components/navbar/search';
import { UserMenu } from '@/app/components/navbar/user-menu';

export const Navbar = () => {
	return (
		<div className="fixed w-full bg-white shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="
					flex
					flex-row
					items-center
					justify-between
					gap-3
					md:gap-0
					"
					>
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>

			</div>
		</div>
	);
};

