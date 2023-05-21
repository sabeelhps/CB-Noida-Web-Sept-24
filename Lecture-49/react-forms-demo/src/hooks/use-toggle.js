import {useState} from "react"; 

const useToggle = (intitalVal=false) => {
    const [value, setValue] = useState(intitalVal);

    const toggleValue = () => {
        setValue(!value);
    }

    return [value, toggleValue];
}

export default useToggle;