import styled from "styled-components";

export const Image = styled.div((props) => {
	const { imageUrl, height, width, flex } = props;

	return `
	flex: ${flex};
   background: url(${imageUrl});
   height: ${height};
	width: ${width};
	background-size: cover;
	background-position: center;
   `;
});
