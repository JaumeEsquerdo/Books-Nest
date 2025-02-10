import {useState, useEffect} from 'react';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem("theme")=== "dark"; //recupera valores guardados en localStorage ; si el valor es dark entonces es true
    });

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark"); //"dark" a <html>, los estilos CSS que dependen de .dark comienzan a aplicarse.
            // para aplicar bien le pongo la class dark a quien quiera que cambie
            localStorage.setItem("theme", "dark"); 
        } else { //si el localStorage es false...
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