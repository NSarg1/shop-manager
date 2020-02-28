import styled from "styled-components";

export const Image = styled.div((props) => {
	const { imageUrl, height, width } = props;

	return `
   background: url(${imageUrl});
   height: ${height};
	width: ${width};
	background-size: cover;
   `;
});
