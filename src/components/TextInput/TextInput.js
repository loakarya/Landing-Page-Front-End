import React from 'react';
// import './HeaderBar.css';

const TextInput = ({type, placeholder, name, register, required}) => {
    return (
        <div className="form-group">
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                ref={register({ required })} 
                required={required}
                // autoComplete="off"
            />
        </div>
    );
}

// HeaderBar.defaultProps = {
//     message: 'gaada'
// }

export default TextInput;