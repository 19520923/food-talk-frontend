export const initialUserState = {
    currentUser: null,
    socketio: null,
    isLogginIn: false,
}

export const UserReducer = (state, action) => {
   switch (action.type) {
       case 'SET_CURRENT_USER':
        return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true,
            }
        
        case 'SET_SOCKETIO':
            return {
              ...state,
              socketio: action.payload,
            }
   
       default:
            throw new Error(`action type ${action.type} is undefined`)
    } 
}