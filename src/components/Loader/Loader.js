import styled from 'styled-components';
import loader from '../../assets/img/loading.gif';

const Loader = () => {
    return (
        <LoadingBox>
            <img src={loader} alt='loading...' />
            <p>Wait for a second, please...</p>
        </LoadingBox>
    );
};

const LoadingBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
`;

export default Loader;
