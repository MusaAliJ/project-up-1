import React, { Component } from 'react'
import './index.css';
import Box from '../../images/box.png';
import Arrow from '../../images/arrow.png';
import { CheckBox } from '../../common'

export default class Form extends Component {
    render() {
        return (
            <div className='topbar'>
                <p className='main-heading'>text</p>
                <div className='steps'>
                    <div>
                        <CheckBox id='top-1' name='top-1' margin='0'/>
                    </div>
                    <div>
                        <img className='arrow-img' src={Arrow} />
                    </div>
                    <div>
                        <CheckBox id='top-2' name='top-2' margin='0'/>
                    </div>
                    <div>
                        <img className='arrow-img' src={Arrow} />
                    </div>
                    <div>
                        <CheckBox id='top-3' name='top-3' margin='0'/>
                    </div>
                    <div>
                        <img className='arrow-img' src={Arrow} />
                    </div>
                    <div>
                        <CheckBox id='top-4' name='top-4' margin='0'/>
                    </div>
                </div>
            </div>
        )
    }
}