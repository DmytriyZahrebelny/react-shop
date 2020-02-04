import React from 'react';
import styled from 'styled-components';

const EmailBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 25px;

	label {
		display: inline-block;
		width: 180px;
		font-size: 14px;
		color: #585858;
	}

	input {
		display: inline-block;
		width: 350px;
		padding: 9px 12px 8px;
		font-size: 14px;
		box-shadow: inset 0 1px 3px -1px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(38, 35, 75, 0.5);
		border-radius: 4px;
	}
`;

const ErrorText = styled.p`
	position: absolute;
	bottom: -35px;
	font-size: 14px;
	color: #bf1650;
`;

const EmailField = ({ name, register, id, label, errors, onChange, placeholder }) => {
	return (
		<EmailBox>
			{label ? <label htmlFor={id}>{label}</label> : null}
			<input
				name={name}
				ref={register({
					required: 'is required',
					pattern: {
						value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Invalid email address',
					},
				})}
				id={id}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
		</EmailBox>
	);
};

export default EmailField;
