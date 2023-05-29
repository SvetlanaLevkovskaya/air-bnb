'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRegisterModal } from '@/app/hooks/use-register-modal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from '@/app/components/modals/modal';
import { Heading } from '@/app/components/heading';
import { Input } from '@/app/components/inputs/input';
import toast from 'react-hot-toast';
import { Button } from '@/app/components/button';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/all';

export const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: {
			errors,
		},
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios.post('/api/register', data)
				 .then(() => {
					 registerModal.onClose();
				 })
				 .catch((error) => {
					 toast.error('Something went wrong!')
				 })
				 .finally(() => {
					 setIsLoading(false)
				 })
	}

	const bodyContainer = 'flex flex-col gap-4';
	const subtitle = 'text-neutral-500 font-light mt-2';
	const footerContainer = 'flex flex-col gap-4 mt-3';
	const loginLinkContainer = 'text-neutral-500 text-center mt-4 font-light';
	const footerText = 'justify-center flex flex-row items-center gap-2'
	const loginLinkText = 'text-neutral-800 cursor-pointer hover:underline';

	const bodyContent = (
		<div className={ bodyContainer }>
			<Heading title="Welcome to AirBnb!"
							 subtitle="Create an Account"
			/>
			<Input
				id="email"
				label="Email"
				disabled={ isLoading }
				register={ register }
				errors={ errors } required
			/>
			<Input
				id="name"
				label="Name"
				disabled={ isLoading }
				register={ register }
				errors={ errors } required
			/>
			<Input
				id="password"
				type="password"
				label="Password"
				disabled={ isLoading }
				register={ register }
				errors={ errors } required
			/>
		</div>
	)

	const footerContent = (
		<div className={ footerContainer }>
			<hr />
			<Button
				outline
				label="Continue with Google"
				icon={ FcGoogle }
				onClick={ () => {} }
			/>
			<Button
				outline
				label="Continue with Github"
				icon={ AiFillGithub }
				onClick={ () => {} }
			/>
			<div className={ loginLinkContainer }>
				<div className={ footerText }>
					<div>
						Already have an account?
					</div>
					<div onClick={ registerModal.onClose } className={ loginLinkText }>
						Log in
					</div>

				</div>

			</div>

		</div>
	)

	return (
		<Modal
			disabled={ isLoading }
			isOpen={ registerModal.isOpen }
			title="Register"
			actionLabel="Continue"
			onClose={ registerModal.onClose }
			onSubmit={ handleSubmit(onSubmit) }
			body={ bodyContent }
			footer={ footerContent }
		/>


	);
};

