import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	justify-content: top;
	width: 100%;
	background-image: ${(props) => (props.gradient ? props.theme.colors.gradient : "#ffffff")};
`;
