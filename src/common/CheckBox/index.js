import './index.css';

const CheckBox = ({ title = 'Check', width = '19px', id, name,margin,padding }) => (
    <span style={{ display: 'flex' }}>
        <input style={{ width,margin,padding  }} type="checkbox" id={id} name={name} value=""  className='checkBoxInput'/>
        <label for={id}>{title}</label>
    </span>
);

export default CheckBox;
