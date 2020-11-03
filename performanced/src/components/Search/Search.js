import React, { useState, useContext } from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import { GithubContext } from '../../context/github/githubContext'


import classes from './Search.module.scss'

const Search = () => {
    const {Search} = classes 

    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const [value, setValue] = useState('')

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Введите данные пользователя!')
        }
    }

    return (
        <div className={`${Search} form-group`}>
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