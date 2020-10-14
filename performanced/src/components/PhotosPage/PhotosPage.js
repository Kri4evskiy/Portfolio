import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import photo_1 from '../../img/5qKVonW3cNI.jpg'
import photo_2 from '../../img/photo_2020-10-13_11-51-03.jpg'
import photo_3 from '../../img/photo_2020-10-13_12-04-34.jpg'

import classes from './PhotosPage.module.scss'

const PhotosPage = () => {
    const { PhotosPage, wrapper, wrapper_img, wrapper_text } = classes
    console.log();
    return (

        <Container fluid='md' className={PhotosPage}>
            <Row>
                <Col >
                    <div className={wrapper}>
                        <div className={wrapper_img}>
                            <img src={photo_1} alt='My foto 1' />
                        </div>
                        <div className={wrapper_text}>
                            <p>
                                My name is Stanislav аnd I am looking for a company that would
                                believe in my potential and provide an opportunity to become a Junior
                                Front-end developer.
                                I am purposeful, conscientiousness, reliable, diligence, friendliness
                                person and it’s not just a words. If some difficulties arise, I am not shy
                                about asking for help. In addition, if someone ask me for help, I never
                                refuse.
                                That’s why I’m looking for a company willing to offer me a placement
                                among their developers. In return, I would offer my full commitment, and
                                be a pleasant and friendly addition to your team.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div className={wrapper}>
                        <div className={wrapper_text}>
                            <p>
                                My name is Stanislav аnd I am looking for a company that would
                                believe in my potential and provide an opportunity to become a Junior
                                Front-end developer.
                                I am purposeful, conscientiousness, reliable, diligence, friendliness
                                person and it’s not just a words. If some difficulties arise, I am not shy
                                about asking for help. In addition, if someone ask me for help, I never
                                refuse.
                                That’s why I’m looking for a company willing to offer me a placement
                                among their developers. In return, I would offer my full commitment, and
                                be a pleasant and friendly addition to your team.
                            </p>
                        </div>

                        <div className={wrapper_img}>
                            <img src={photo_2} alt='My foto 2' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div className={wrapper}>
                        <div className={wrapper_img}>
                            <img src={photo_3} alt='My foto 3' />
                        </div>
                        <div className={wrapper_text}>
                            <p>
                                My name is Stanislav аnd I am looking for a company that would
                                believe in my potential and provide an opportunity to become a Junior
                                Front-end developer.
                                I am purposeful, conscientiousness, reliable, diligence, friendliness
                                person and it’s not just a words. If some difficulties arise, I am not shy
                                about asking for help. In addition, if someone ask me for help, I never
                                refuse.
                                That’s why I’m looking for a company willing to offer me a placement
                                among their developers. In return, I would offer my full commitment, and
                                be a pleasant and friendly addition to your team.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotosPage