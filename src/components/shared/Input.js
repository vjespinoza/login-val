import styled from "styled-components";

export const Input = styled.input`
	font-weight: bold;
	font-size: 1.1rem;
	height: 3rem;
	padding: 0.3rem;
	border-style: none none solid none;
	border-width: 2px;
	border-color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
	margin-bottom: 1.5rem;
	background-color: transparent;
	color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};

	&::placeholder {
		color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
	}

	&:focus {
		outline: none;
		border-color: ${(props) =>
			props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
		transition: all ease-in-out 200ms;
	}
`;
