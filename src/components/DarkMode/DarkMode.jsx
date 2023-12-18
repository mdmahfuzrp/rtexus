
import { MonIcon, SunIcon } from "../../assets/icons";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light");
    }
    const setLightMode = () =>{
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark");
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark"){
        setDarkMode();
    }
    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme || true}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <SunIcon />
                <MonIcon />
            </label>
        </div>
    );
};

export default DarkMode;
