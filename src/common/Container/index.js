import './index.css';

const Container = ({ children,padding,margin }) => (
  <div className='container' style={{margin,padding}}>
    {children}
  </div>
);

export default Container;
