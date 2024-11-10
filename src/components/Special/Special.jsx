import { useContext } from "react";
import { AssetContext, Shakib } from "../GrandPa/GrandPa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext);
   


    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p> also has: {gift}</p>
        </div>
    );
};

export default Special;