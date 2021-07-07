import styled from "styled-components";

export const FormsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 45rem;
	box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
	position: relative;

	&::before {
		content: "chevron_right";
		font-family: "Material Icons";
		font-size: 30px;
		line-height: 50px;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50px;
		height: 50px;
		display: block;
		fill: blueviolet;
		border-radius: 500px;
		box-shadow: inset 200px 200px #e5e5e5, 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		margin: 50px 0;

		&::before {
			display: none;
		}
	}
`;
