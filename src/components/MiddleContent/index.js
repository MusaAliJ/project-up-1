import React, { Component } from 'react'
import { Container, Button, Btn, Radio, CheckBox, Input } from '../../common'

export default class MiddleContent extends Component {
    render() {
        return (
            <div className='Content'>
                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex justify-content-between'>
                        <p>text</p>
                        <Btn />
                    </div>
                    <Container padding='10px'>
                        <div className='d-flex sec-section'>
                            <div className='d-flex col-3 justify-content-evenly'>
                                <p>text</p>
                                <p>text</p>
                            </div>
                            <div className='d-flex col-3 justify-content-evenly'>
                                <p>text</p>
                                <p>text</p>
                            </div>
                            <div className='col-3'>
                                <Button margin='13px 0 0 0'/>
                            </div>
                        </div>
                    </Container>
                </Container>
                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex justify-content-between'>
                        <p>text</p>
                        <Btn />
                    </div>
                    <Container padding='10px'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>text</td>
                                    <td style={{ width: '20%' }}>
                                        <select>
                                            <option></option>
                                        </select>
                                    </td>
                                    <td style={{ width: '100%' }}>
                                        <Input />
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <div className='d-flex'>
                                            <select>
                                                <option></option>
                                            </select>&nbsp;
                                            <select>
                                                <option></option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex' style={{ width: '50%', float: 'right' }}>
                                            <select>
                                                <option>text</option>
                                                <option>text</option>
                                            </select>&nbsp;
                                            <select>
                                                <option>text</option>
                                                <option>text</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td colSpan='2'>
                                        <Input width='59%' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'baseline' }}>text</td>
                                    <td colSpan='2'>
                                        <textarea rows='5'></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td colSpan='2'>
                                        <div className='d-flex' style={{ width: '60%' }}>
                                            <Input margin='0px 10px 0px 0px' />
                                            <Button title='Add' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan='2'>
                                        <div className='d-flex' style={{ width: '83%' }}>
                                            <Input margin='0px 10px 0px 0px' />
                                            <Radio name='group-1' id='radio-1' />
                                            <Radio name='group-1' id='radio-2' />
                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ verticalAlign: 'baseline' }}>text</td>
                                    <td className='border' colSpan='2' style={{ paddingLeft: 20 }}>
                                        <p>text</p>
                                        <div className='d-flex' style={{ width: '50%' }}>
                                            <div style={{ width: '130px' }}>
                                                <CheckBox id='check-1' name='check-1' />
                                            </div>
                                            <div className='col-3'>
                                                <Input width='30%' margin='0px 5px 0px 0px' />
                                                <label>text</label>
                                            </div>
                                            <div className='col-3'>
                                                <Input width='30%' margin='0px 5px 0px 0px' />
                                                <label>text</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className='d-flex' style={{ width: '50%' }}>
                                            <div style={{ width: '130px' }}>
                                                <CheckBox id='check-2' name='check-2' />
                                            </div>
                                            <div className='d-flex'>
                                                <Radio name='group-2' id='radio-3' />
                                                <Radio name='group-2' id='radio-4' />
                                                <Radio name='group-2' id='radio-5' />
                                            </div>
                                        </div>
                                        <br />
                                        <div className='d-flex'>
                                            <div style={{ width: '130px' }}>
                                                <CheckBox id='check-3' name='check-3' />
                                            </div>
                                            <div className='d-flex'>
                                                <Input width='30%' margin='0 0 0 -5px' />
                                            </div>
                                            <div className='d-flex'>
                                                <CheckBox id='check-4' name='check-4' />
                                            </div>
                                            <div className='d-flex' style={{ width: '200px', marginLeft: 30 }}>
                                                <select>
                                                    <option>text</option>
                                                    <option>text</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        <div className='d-flex' style={{ width: '50%' }}>
                                            <div style={{ width: '130px' }}>
                                                <CheckBox id='check-5' name='check-5' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ verticalAlign: 'top' }}>text</td>
                                    <td colSpan='2'>
                                        <textarea rows='5'></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td className='border' colSpan='2' style={{ paddingLeft: 20 }}>
                                        <div>
                                            <Radio name='group-3' id='radio-6' />
                                        </div>
                                        <br />
                                        <div className='d-flex'>
                                            <Radio name='group-3' id='radio-7' />
                                            <div className='d-flex' >
                                                <Input margin='0 10px' type='date' />
                                                <Input margin='0 10px' type='time' />
                                                -
                                                <Input margin='0 10px' type='date' />
                                                <Input margin='0 10px' type='time' />

                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <Radio name='group-3' id='radio-8' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <CheckBox id='check-6' name='check-6' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <Input />
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <Input />
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <CheckBox id='check-7' name='check-7' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'baseline' }}>text</td>
                                    <td colSpan='2'>
                                        <textarea rows='10'></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'baseline' }}>text</td>
                                    <td colSpan='2'>
                                        <textarea cols='50' rows='5'></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td>
                                        <select>
                                            <option></option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>text</td>
                                    <td className='border' colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-6' id='radio-11' />
                                            </div>
                                            <div>
                                                <Input margin='0 0 0 20px' />
                                            </div>
                                        </div>
                                        <br />
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-6' id='radio-12' />
                                            </div>
                                            <div>
                                                <Input margin='0 0 0 20px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td className='border' colSpan='2'>
                                        <div className='d-flex mb-1'>
                                            <div>
                                                <Radio name='group-7' id='radio-13' />
                                            </div>
                                            <div>
                                                <Radio name='group-7' id='radio-14' />
                                            </div>
                                            <div>
                                                <Radio name='group-7' id='radio-15' />
                                            </div>
                                            <div>
                                                <Radio name='group-7' id='radio-16' />
                                            </div>
                                        </div>
                                        <div className='pl-1'>
                                            <div className='d-flex mb-1' >
                                                <Input margin='0 20px 0 0' width='309px' />
                                                <Button title='Add' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                </Container>

                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex justify-content-between'>
                        <p>text</p>
                    </div>
                    <Container padding='10px'>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-8' id='radio-17' />
                                            </div>
                                            <div>
                                                <Radio name='group-8' id='radio-18' />
                                            </div>
                                            <div>
                                                <Radio name='group-8' id='radio-19' />
                                            </div>
                                            <div>
                                                <Radio name='group-8' id='radio-20' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Btn float='right' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-9' id='radio-21' />
                                            </div>
                                            <div>
                                                <Radio name='group-9' id='radio-22' />
                                            </div>
                                            <div>
                                                <Radio name='group-9' id='radio-23' />
                                            </div>
                                            <div>
                                                <Radio name='group-9' id='radio-24' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-10' id='radio-25' />
                                            </div>
                                            <div>
                                                <Radio name='group-10' id='radio-26' />
                                            </div>
                                            <div>
                                                <Radio name='group-10' id='radio-27' />
                                            </div>
                                            <div>
                                                <Radio name='group-10' id='radio-28' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-11' id='radio-29' />
                                            </div>
                                            <div>
                                                <Radio name='group-11' id='radio-30' />
                                            </div>
                                            <div>
                                                <Radio name='group-11' id='radio-31' />
                                            </div>
                                            <div>
                                                <Radio name='group-11' id='radio-32' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}></td>
                                    <td colSpan='2'>
                                        <div className='pl-1'>
                                            <div className='d-flex mb-1' >
                                                <Input margin='0 20px 0 0' width='309px' />
                                                <Button title='Add' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-12' id='radio-33' />
                                            </div>
                                            <div>
                                                <Radio name='group-12' id='radio-34' />
                                            </div>
                                            <div>
                                                <Radio name='group-12' id='radio-35' />
                                            </div>
                                            <div>
                                                <Radio name='group-12' id='radio-36' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}></td>
                                    <td colSpan='2'>
                                        <div className='pl-1'>
                                            <div className='d-flex mb-1' >
                                                <Input margin='0 20px 0 0' width='309px' />
                                                <Button title='Add' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-13' id='radio-37' />
                                            </div>
                                            <div>
                                                <Radio name='group-13' id='radio-38' />
                                            </div>
                                            <div>
                                                <Radio name='group-13' id='radio-39' />
                                            </div>
                                            <div>
                                                <Radio name='group-13' id='radio-40' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}></td>
                                    <td colSpan='2'>
                                        <div className='pl-1'>
                                            <div className='d-flex mb-1' >
                                                <Input margin='0 20px 0 0' width='309px' />
                                                <Button title='Add' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                                <Btn title='Add' float='right' padding='0px 30px' margin='0 15% 0 0 ' />

                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-14' id='radio-41' />
                                            </div>
                                            <div>
                                                <Radio name='group-14' id='radio-42' />
                                            </div>
                                            <div>
                                                <Radio name='group-14' id='radio-43' />
                                            </div>
                                            <div>
                                                <Radio name='group-14' id='radio-44' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}></td>
                                    <td colSpan='2'>
                                        <div className='pl-1'>
                                            <div className='d-flex mb-1' >
                                                <Input margin='0 20px 0 0' width='309px' />
                                                <Button title='Add' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                            <div className='mb-1'>
                                                <Input width='309px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <Input width='80%' placeholder='input' />
                                    </td>
                                    <td colSpan='2'>
                                        <div className='d-flex'>
                                            <div>
                                                <Radio name='group-16' id='radio-41' />
                                            </div>
                                            <div>
                                                <Radio name='group-16' id='radio-42' />
                                            </div>
                                            <div>
                                                <Radio name='group-16' id='radio-43' />
                                            </div>
                                            <div>
                                                <Radio name='group-16' id='radio-44' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                </Container>

                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex justify-content-between'>
                        <p>text</p>
                        <Btn />
                    </div>
                    <Container padding='10px'>
                        <div className='d-flex sec-section'>
                            <div className='d-flex col-3 justify-content-evenly'>
                                <p>text</p>
                                <p>text</p>
                            </div>
                            <div className='d-flex col-3 justify-content-evenly flex-content-center'>
                                <Radio name='group-15' id='radio-45' />
                                <Radio name='group-15' id='radio-46' />
                            </div>
                            <div className='col-3 '>
                                <Button margin='13px 0 0 0'/>
                            </div>
                        </div>
                    </Container>
                </Container>

                <Container padding='10px 20px' margin='10px 0'>
                    <div className='d-flex justify-content-between'>
                        <p>text</p>
                        <Btn />
                    </div>
                    <Container padding='10px'>
                        <div className='d-flex sec-section'>
                            <div className='d-flex col-3 justify-content-evenly'>
                                <p>text</p>
                                <p>text</p>
                            </div>
                            <div className='col-9'>
                                <Button margin='13px 0 0 0'/>
                            </div>
                        </div>
                    </Container>
                </Container>
            </div>
        )
    }
}