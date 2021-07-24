import './index.css';
const Input = ({ type='text', placeholder, width, margin, padding }) => (
    <input type={type} className='input' style={{ maxWidth:width,margin,padding }} placeholder={placeholder} />
);

export default Input;
