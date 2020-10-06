import React, {Component} from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Input from '../UI/Input';
import classes from './StartScreen.module.scss'

class StartScreen extends Component {

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        
        return (
            <div className={classes.StartScreen}>
                <Container>
                    <Row>
                        <Col>
                            <div className={classes.StartScreen__title}>
                                <Zoom cascade duration={5000}>
                                    <h2>WELCOME</h2>
                                </Zoom>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div className='StartScreen__title'>
                                <form onSubmit={this.submitHandler}>

                                    <Input
                                        label='Name'
                                    />

                                    <Input
                                        label='Nickname'
                                        errorMessage='TEST'
                                    />

                                </form>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }

}

export default StartScreen