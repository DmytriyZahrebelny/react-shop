import React from 'react';
import styled from 'styled-components';

const TextFieldBox = styled.div`
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

const TextField = ({
	name,
	register,
	errors,
	isRequired = false,
	id,
	label,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<TextFieldBox>
			{label ? <label htmlFor={id}>{label}</label> : null}
			<input
				name={name}
				type='text'
				value={value}
				ref={register({
					required: isRequired ? 'is required' : false,
				})}
				id={id}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
		</TextFieldBox>
	);
};

export default TextField;
