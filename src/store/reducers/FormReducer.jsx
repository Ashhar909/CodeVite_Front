const initialState = {
    success:false
}

const FormReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_FORM":
            return{
                ...state,
                success:action.status
            }
        case "FORM_ERROR":
            return{
                ...state,
                success:action.status
            }
        default:
            return state;
    }
}

export default FormReducer