import React from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme]= React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light");
    const element = document.documentElement;
    
    React.useEffect(() =>{
      localStorage.setItem("theme", theme);
      if (theme === "dark"){
        element.classList.add("dark");
        element.classList.add("dark");
      } else{
        element.classList.remove("dark")
      }  
    })
  return (
    <div className='realtive'>
        <img onClick={()=> setTheme(theme === "dark" ? "light" : "dark") } src ={LightButton} alt='' className={`w-12 cursor-pointer absolute z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300 `}/>
        <img src ={DarkButton} alt='' className={`w-12 cursor-pointer `}/>
    </div>
  )
}

export default DarkMode;