import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { giảm } from '../action/couterAction';
import { tăng } from '../action/couterAction';
const Couter = (props) =>{
    console.log(props);
    return (
        <>  
            <h1>Couter</h1>
            <h2>{props.count}</h2>
            <Button variant="warning" onClick={props.handlerGiam}>giảm</Button>{' '}
            <Button variant="success" onClick={props.handlerTăng}>tăng</Button>{' '}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        count : state.count
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        handlerGiam : () =>{
            dispatch(giảm())
        },
        handlerTăng : () =>{
            dispatch(tăng())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Couter)