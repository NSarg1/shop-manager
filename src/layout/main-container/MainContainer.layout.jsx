import React from "react";
import { Main } from "./MainContainer.styled";

const MainContainer = ({ children }) => {
	return <Main className='main-container'>{children}</Main>;
};

export default MainContainer;
