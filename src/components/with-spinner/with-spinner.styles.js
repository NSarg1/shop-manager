import styled from "styled-components";

export const SpinnerOverlay = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 3.5rem;
	height: 3.5rem;
	border: 0.3rem solid rgba(195, 195, 195, 0.6);
	border-radius: 50%;
	border-top-color: #636767;
	animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
