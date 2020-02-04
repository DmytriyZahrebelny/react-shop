import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import EmailField from '../components/FormControls/EmailField';
import PasswordField from '../components/FormControls/PasswordField';
import TextField from '../components/FormControls/TextField';

const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
`;

const Button = styled.button`
	display: block;
	width: 200px;
	padding: 10px;
	margin: 10px auto 0;
	padding: 10px;
	font-size: 20px;
	text-align: center;
	color: #1b1b1b;
	background-color: inherit;
	border: 2px solid #1b1b1b;
	border-radius: 24px;
	cursor: pointer;

	:hover {
		background-color: #1b1b1b;
		color: #ffffff;
	}
`;

const RegistrationForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					name='firstName'
					register={register}
					errors={errors}
					placeholder='First Name'
					isRequired
				/>
				<TextField
					name='lastName'
					register={register}
					errors={errors}
					placeholder='Last Name'
					isRequired
				/>
				<EmailField name='email' register={register} errors={errors} placeholder='Email Address' />
				<PasswordField name='password' register={register} errors={errors} placeholder='Password' />
				<Button type='submit' label='submit'>
					Submit
				</Button>
			</form>
		</FormContainer>
	);
};
export default RegistrationForm;
