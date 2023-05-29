'use client'
import React, { FC, useEffect, useState } from 'react';

type ClientOnlyType = {
	children: React.ReactNode
}
export const ClientOnly: FC<ClientOnlyType> = ({children}) => {
	const [hasMounted, seHasMounted] = useState(false)

	useEffect(() => {
		seHasMounted(true)
	}, [])

	if(!hasMounted) {
		return null
	}

	return (
		<>
			{children}
		</>
	);
};

