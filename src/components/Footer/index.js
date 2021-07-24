import React, { Component } from 'react'
import { Container,Button,Btn } from '../../common'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex f-right'>
                        <p style={{margin:12}}>CLOSE</p>
                        <Btn />
                    </div>
                </Container>
                <div>
                    <div className='flex-content-center mb-3 mt-3'>
                        <Button margin='0 10px'/>
                        <Button margin='0 10px'/>
                    </div>
                </div>
            </div>
        )
    }
}