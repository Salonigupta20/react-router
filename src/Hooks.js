import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Hooks() {
    const navigate = useNavigate();
    const location= useLocation();
  
    
    function handleClick() {
      navigate("/");
    }
    function getlocation(){
      console.log(location);
    }
  
    return (
      <>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <button type="button" onClick={getlocation}>
        Get Location
      </button>
      </>
    );
  } 
  export default Hooks;  
  

