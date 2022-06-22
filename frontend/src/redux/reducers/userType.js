const initialState = {
    userType : "USER"
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
             return Object.assign({}, state, {
                navLocation : 'USER'
             })
        case "ADMIN":
             return Object.assign({}, state, {
                navLocation : 'ADMIN'
             })
        default:
            return state;
    }
}

export default userReducer