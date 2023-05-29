'use client'

import React, { FC, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/all';
import { Button } from '@/app/components/button';
import styles from './Modal.module.css';

type ModalType = {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;

}
export const Modal: FC<ModalType> = ({
																			 isOpen,
																			 onClose,
																			 onSubmit,
																			 title,
																			 body,
																			 footer,
																			 actionLabel,
																			 disabled,
																			 secondaryAction,
																			 secondaryActionLabel,

																		 }) => {
	const [showModal, setShowModal] = useState(isOpen)

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}
		setShowModal(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}, [disabled, onClose])

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}

		onSubmit()
	}, [disabled, onSubmit])

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return
		}
		secondaryAction()
	}, [disabled, secondaryAction])

	if (!isOpen) {
		return null
	}

	const modalWrapperClasses = styles.modalWrapper;
	const contentClasses = `${ styles.content } ${ showModal ? styles['content.show'] : styles['content.hide'] }`;
	const headerClasses = styles.header;
	const closeButtonClasses = styles.closeButton;
	const footerButtonWrapperClasses = styles.footerButtonWrapper;
	const modalContainerClasses = 'relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto';
	const contentWrapperClasses = 'translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none';
	const titleClasses = 'text-lg font-semibold';
	const bodyClasses = 'relative p-6 flex-auto';
	const footerClasses = 'flex flex-col gap-2 p-6';

	return (
		<>
			<div
				className={ modalWrapperClasses }
			>
				<div className={ modalContainerClasses }
				>
					{/*content*/ }
					<div className={ contentClasses }>
						<div className={ contentWrapperClasses }
						>

							{/*header*/ }
							<div className={ headerClasses }
							>
								<button
									className={ closeButtonClasses }
									onClick={ handleClose }
								>
									<IoMdClose size={ 18 } />
								</button>
								<div className={ titleClasses }>
									{ title }
								</div>
							</div>

							{/*body*/ }
							<div className={ bodyClasses }>
								{ body }
							</div>

							{/*footer*/ }
							<div className={ footerClasses }>
								<div
									className={ footerButtonWrapperClasses }
								>
									{ secondaryAction && secondaryActionLabel && (
										<Button
											outline
											disabled={ disabled }
											label={ secondaryActionLabel }
											onClick={ handleSecondaryAction }
										/>
									) }

									<Button
										disabled={ disabled }
										label={ actionLabel }
										onClick={ handleSubmit }
									/>
								</div>
								{ footer }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

