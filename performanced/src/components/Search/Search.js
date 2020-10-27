import React, { useState } from 'react'

const Search = () => {

const [value, setValue] = useState('')
const onSubmit = (event) => {
    if (event.key !== 'Enter') {
        return
    }
    if (value.trim()) {
        console.log('Make request ',value);
    } else {
        console.log('no value');
    }
}

    return (
        <div className='form-group'>
            <input 
                type='text'
                className='form-control'
                placeholder='Enter github user...'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}

export default Search