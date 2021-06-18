import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    container: "#fff",
    fontColor: "#000",
};

export const darkTheme = {
    container: "#000",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.container};
	}
`;
