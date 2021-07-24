import React, { Component } from 'react'
import './index.css';
import { TopBar, MiddleContent, Footer } from '../../components';


export default class Form extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <MiddleContent />
                <Footer />
            </div>
        )
    }
}