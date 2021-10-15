import { Button } from 'react-bootstrap';

const App = () => {
    return (
        <h1 className='App'>
            <Button variant='primary'>Primary</Button> <Button variant='secondary'>Secondary</Button>{' '}
            <Button variant='success'>Success</Button> <Button variant='warning'>Warning</Button>{' '}
        </h1>
    );
};

export default App;
