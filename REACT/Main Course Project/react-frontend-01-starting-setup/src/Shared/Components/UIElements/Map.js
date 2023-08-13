import React, {useRef} from "react";
//useref can be used to create references which can create so called references which
import './Map.css'

const Map= props => {
    const map =new window.google.maps.Map();

return <div className={'map ${props.className}'}
style={props.style}>

</div>;
};

export default Map;
