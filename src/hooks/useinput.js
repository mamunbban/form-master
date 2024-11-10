import { useState } from "react"

const useInputState = (defaultvalue = null) =>{
    const [value, setValue] = useState(defaultvalue);
     
    const handleChange = e =>{
        setValue(e.target.value)
    }
    return [value, handleChange
    ];

}

export default useInputState