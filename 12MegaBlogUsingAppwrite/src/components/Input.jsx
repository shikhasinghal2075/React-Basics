import React, {useId} from "react";

// function Input({}){
//     const id = useId()
//     return(
//         <div>Input</div>
//     )
// }

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref){
    const id = useId()
    return (
        // <h1>Test</h1>
        <div className="w-full">
            {label && 
            <label className="inline-block mb-1 pl-1" htmlFor={id}>
                {label}
            </label>
            }
            <input type={type}/>
        </div>
    )
})
export default Input