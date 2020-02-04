import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.div`
	display: flex;
	margin: 0 0 15px 0;

	input {
		margin-right: 10px;
	}
	label {
		display: inline-block;
		width: 180px;
		font-size: 14px;
		color: #585858;
	}
`;

const CheckboxInput = ({ register, label, isChecked = false, onChange }) => {
	return (
		<Checkbox>
			<input
				id='checkbox'
				name='checkbox'
				type='checkbox'
				ref={register({
					required: false,
				})}
				defaultChecked={isChecked}
				onChange={onChange}
			/>
			{label ? <label htmlFor='checkbox'>{label}</label> : null}
		</Checkbox>
	);
};

export default CheckboxInput;
