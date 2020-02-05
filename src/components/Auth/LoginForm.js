import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import EmailField from '../components/FormControls/EmailField';
import PasswordField from '../components/FormControls/PasswordField';
import Button from '../components/FormControls/Button';

const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
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
				<Button>Submit</Button>
			</form>
		</FormContainer>
	);
};

export default LoginForm;
