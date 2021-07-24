import './index.css';

const Button = ({ title='Button', margin }) => (
    <button className='black-button' type='button' style={{margin}}>
        {title}
    </button>
);

export default Button;
