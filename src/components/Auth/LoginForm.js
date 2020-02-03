import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

const FormContainer = styled.div`
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
	color: #ff8f33;
	background-color: inherit;
	border: 2px solid #fb4128;
	border-radius: 24px;
	cursor: pointer;

	:hover {
		background-color: #ff5122;
		color: #ffffff;
	}
`;

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: values => console.log(JSON.stringify(values)),
	});

	return (
		<FormContainer>
			<form onSubmit={formik.handleSubmit}>
				<input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.firstName}
					placeholder='Username'
				/>
				<input
					id='password'
					name='password'
					type='password'
					onChange={formik.handleChange}
					value={formik.values.firstName}
					placeholder='Password'
				/>
				<Button type='submit' label='submit'>
					Submit
				</Button>
			</form>
		</FormContainer>
	);
};

export default LoginForm;
