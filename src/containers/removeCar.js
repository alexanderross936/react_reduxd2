import  { connect } from "react-redux";
import { removeCar } from '../redux/actions';



const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (car) => dispatch(removeCar(car)),
    }
}

export default connect(null, mapDispatchToProps)(removeCar)