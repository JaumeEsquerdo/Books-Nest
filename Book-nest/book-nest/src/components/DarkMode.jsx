import {useState, useEffect} from 'react';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem("theme")=== "dark";
    });

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[darkMode]);

    return ( 
    <button className='BtnDark' onClick={()=> setDarkMode(!darkMode)}>
        {darkMode? "Modo claro" : "Modo oscuro"} 
        {/* si darkMode es true, sale en el botón Modo claro */}

    </button> );
}
 
export default DarkMode;