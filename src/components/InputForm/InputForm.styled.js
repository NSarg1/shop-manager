import styled from "styled-components";
import CustomIcon from "../Icon/Icon.component";

//CUSTOM SELECT

export const SelectOverlay = styled.div`
	border-radius: 0.5rem;
	position: relative;
	min-width: 13rem;
	min-height: 4rem;
	height: 100%;
	background-color: #fff;
`;

export const SelectIcon = styled(CustomIcon)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`;

export const SelectItem = styled.select`
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1rem;
	padding-right: 3rem;
	background-color: transparent;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
`;
