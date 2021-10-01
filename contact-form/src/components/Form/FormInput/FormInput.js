import React from 'react'

import './FormInput.css'

export default function FormInput ({id, name, label, error, register, ...rest}) {

    return (
        <div className="formElement">
            <input 
                data-testid="formInput"
                id={id}
                name={name}
                {...rest}
                {...register(name, 
                    (name == "email" ? 
                        {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                            required: true
                        } 
                    : 
                        {
                            required: true
                        }
                    )
                )}
                style={{borderColor: error ? '#f00' : ''}}
            />
            <label htmlFor={name}>{label}</label>
            {error && <span role="errorMsg" className="errorMsg">{error}</span>}
        </div>
    )
}
