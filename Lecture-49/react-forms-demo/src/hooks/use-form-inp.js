import { useState } from "react"

const useFormInp = (initialVal = "")=> {
    const [value, setValue] = useState(initialVal);

    const setInpValue = (e)=>{
        setValue(e.target.value);
    }

    const resetInpValue = () => {
        setValue("");
    }

    return [value, setInpValue, resetInpValue];
}

export default useFormInp;