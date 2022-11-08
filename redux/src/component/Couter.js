import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch, faHouse, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { giam, tang } from '../redux/couterSlice';

const Couter = () =>{
    const counter = useSelector((state) => state.couter2)
    const dispatch = useDispatch()
    return (
        <>  
            <h1>Couter</h1>
            <h2>{counter}</h2>
            <Button variant="giảm" onClick={() => dispatch(giam())}>giảm</Button>{' '}
            <Button variant="tang" onClick={() => dispatch(tang())}>tăng</Button>
            <FontAwesomeIcon icon={faCircleNotch} color="red" spin/>
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon className='icon' icon={faUserCheck} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faHouse} />
        </>
    )
}

export default Couter