import carData from '../../services/carData';

const reducer = (state=0,action) => {
    if(action.type==='getCarPrice'){
        console.log("Action.payload",action?.payload)
        return carData.filter((carName)=>carName.name===action?.payload)

    }
    else{
        return state;
    }
}
export default reducer