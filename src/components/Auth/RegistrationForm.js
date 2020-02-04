import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

const FormContainer = styled.div`
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
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		onSubmit: values => console.log(JSON.stringify(values)),
	});

	return (
		<FormContainer>
			<form onSubmit={formik.handleSubmit}>
				<input name='firstName' type='text' placeholder='First Name' />
				<input name='lastName' type='text' placeholder='Second Name' />
				<input name='email' type='text' placeholder='Email' />
				<input name='password' type='password' placeholder='Password' />
				<Button type='submit' label='submit'>
					Submit
				</Button>
			</form>
		</FormContainer>
	);
};
export default RegistrationForm;
