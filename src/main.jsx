import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#D71313",
		},
		secondary: {
			main: "#0D1282",
		},
		lightGreen: {
			main: "#BACD92",
		},
		darkGreen: {
			main: "#0A6847",
		},
		pink: {
			main: "#F72798",
		},
		yellow: {
			main: "#F0DE36",
			light: "#E9DB5D",
			dark: "#A29415",
			contrastText: "#242105",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
