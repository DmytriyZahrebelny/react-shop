import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const PasswordBox = styled.div`
	position: relative;
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

const PasswordField = ({ name, register, errors, id, label, isValidate = true, placeholder }) => {
	const [isVisiblePassword, setPasswordFieldValue] = useState(false);
	const [password, setPassword] = useState('');

	const onChangeClick = evt => setPasswordFieldValue(evt.target.checked);
	const onChangePassword = evt => setPassword(evt.target.value);
	return (
		<>
			<PasswordBox>
				{label ? <label htmlFor={id}>{label}</label> : null}
				{isVisiblePassword ? (
					<input
						type='text'
						name={name}
						value={password}
						ref={register({
							required: 'is required',
							validate: {
								valuelength: isValidate ? value => value.length > 7 || 'min length 8' : true,
								isUpper: isValidate
									? value => /[A-Z]/.test(value) || 'must contain uppercase'
									: true,
								hasNumbers: isValidate
									? value => /[0-9]/.test(value) || 'must contain number'
									: true,
							},
						})}
						id={id}
						onChange={onChangePassword}
						placeholder={placeholder}
					/>
				) : (
					<input
						name={name}
						type='password'
						value={password}
						ref={register({
							required: 'is required',
							validate: {
								valuelength: isValidate ? value => value.length > 7 || 'min length 8' : true,
								isUpper: isValidate
									? value => /[A-Z]/.test(value) || 'must contain uppercase'
									: true,
								hasNumbers: isValidate
									? value => /[0-9]/.test(value) || 'must contain number'
									: true,
							},
						})}
						id={id}
						onChange={onChangePassword}
						placeholder={placeholder}
					/>
				)}
				{errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
			</PasswordBox>
			<Checkbox register={register} label='Show Password' onChange={onChangeClick} />
		</>
	);
};

export default PasswordField;
