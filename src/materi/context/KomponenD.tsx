import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const KomponenD = () => {
	const themeContext = useContext(ThemeContext)
	if(!themeContext){
		throw new Error('ThemeSwitcher harus digunakan di dalam ThemeProvider')
	}
	const {theme, changeTheme} = themeContext

	return <button onClick={changeTheme}>{theme}</button>;
};

export default KomponenD;
