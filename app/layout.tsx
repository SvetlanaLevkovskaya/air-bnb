import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/app/components/navbar/navbar';
import { ClientOnly } from '@/app/client-only';
import React from 'react';
import { RegisterModal } from '@/app/components/modals/register-modal';
import { ToasterProvider } from '@/app/providers/toaster-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
}

const font = Nunito({
	subsets: ['latin'],
})

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body className={ font.className }>
		<ClientOnly>
			<ToasterProvider />
			<RegisterModal />
			<Navbar />
		</ClientOnly>
		{ children }
		</body>
		</html>
	)
}
