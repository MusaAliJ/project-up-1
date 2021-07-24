const Radio = ({ title = 'Check',width='30px',id,name }) => (
    <span style={{display:'flex'}} className='content-center'>
        <input style={{ width }} type="radio" id={id} name={name} value="30" />
        <label for={id}>{title}</label>
    </span>
);

export default Radio;
