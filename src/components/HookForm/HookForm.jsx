import { useState } from "react";
import useInputState from "../../hooks/useinput";


const HookForm = () => {
    const [name, handleNameChange] = useInputState('mamoni')
    const handleSubmit = e =>{
        console.log('form data', name);
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="name" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password   " />
                <br />
               <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;