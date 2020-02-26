import React from "react";
import { Main } from "./MainContent.styled";

const MainContent = ({ children }) => {
	return <Main className="MainContent">{children}</Main>;
};

export default MainContent;
