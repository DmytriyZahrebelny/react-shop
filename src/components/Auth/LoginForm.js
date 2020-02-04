import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import EmailField from '../components/FormControls/EmailField';
import PasswordField from '../components/FormControls/PasswordField';

const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
`;

export const Button = styled.button`
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

const LoginForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<EmailField name='email' register={register} errors={errors} placeholder='Email Address' />
				<PasswordField
					name='password'
					register={register}
					errors={errors}
					placeholder='Password'
					isValidate={false}
				/>
				<Button type='submit' label='submit'>
					Submit
				</Button>
			</form>
		</FormContainer>
	);
};

export default LoginForm;
