import './index.css';

const Btn = ({ title='btn',float,padding,margin }) => (
    <button className='orange-btn' type='button' style={{float,padding,margin}}>
        {title}
    </button>
);

export default Btn;
