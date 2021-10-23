import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length >= 2){
            setCategorias((actuales) => [inputValue,...actuales] )
            setInputValue('')
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <input
                placeholder = 'Que desea buscar?'
                type="text"
                value={inputValue}
                onChange={handleChange}
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}