import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

import Input from '../UI/Input';
import Button from '../UI/Button'

import classes from './Welcome.module.scss'

export default class Welcome extends Component {
    
    state = {
        disabled: true,
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                type: 'text',
                label: 'Your Name',
                touched: false,
                required: true
            },
            nickname: {
                value: '',
                type: 'text',
                label: 'Your Nickname',
                touched: false,
                required: true
            }
        }
    }
    
    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true

        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = !!formControls[name].value.trim()
        })

        let disabled = true
        if (formControls.name.value && formControls.nickname.value) {
            disabled = false
        }

        this.setState({
            formControls, isFormValid, disabled
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    touched={control.touched}
                    label={control.label}
                    required={control.required}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        const { name, nickname } = this.state.formControls
        const { onSign } = this.props

        if (name.value.trim() && nickname.value.trim()) {

            localStorage.setItem('name', name.value)
            localStorage.setItem('nickname', nickname.value)

            onSign()
        }
    }

    checkLocalStorage() {
        const { name, nickname } = this.state.formControls
        const localName = localStorage.getItem('name')
        const localNickname = localStorage.getItem('nickname')

        name.value = localName
        nickname.value = localNickname

        const disabled = false

        this.setState({
            name, nickname, disabled
        })
    }

    componentDidMount() {
        if (localStorage.getItem('name') && localStorage.getItem('nickname')) {
            this.checkLocalStorage()
        }
    }

    render() {
        const { Welcome, Welcome__title, Welcome__form } = classes

        return (
            <div className={Welcome}>
                <Container>
                    <Row>
                        <Col>

                            <div className={Welcome__title}>
                                <Zoom cascade duration={5000} >

                                    <h2>WELCOME</h2>

                                </Zoom>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={Welcome__form}>
                                <Zoom duration={4500} delay={3000}>

                                    <form onSubmit={this.handleFormSubmit}>

                                        {this.renderInputs()}

                                        <Button
                                            disabled={this.state.disabled}
                                            type='submit'
                                        >lets roll</Button>

                                    </form>

                                </Zoom>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}