


const FlowerIngredient = ({type}) => {
const types = {
    salami: { backgroundcolor: black, width: "35px", height: "35px" },
    tomato: { backgroundcolor: black, width: "35px", height: "35px" },
    blackOlive: { backgroundcolor: black, width: "10px", height: "10px" },
    greenOlive: { backgroundcolor: blue, width: "10px", height: "10px" },
    redPepper: { backgroundcolor: red, width: "20px", height: "20px" },
    yellowPepper: { backgroundcolor: yellow, width: "40px", height: "40px" },
  };

    return ( 
        <div>
            {type}
        </div>
     );
}
 
export default FlowerIngredient;