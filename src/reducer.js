export const initialState = {
    user: null, //email
    username: "placeholder",
    avatarUrl: "https://www.ourhenhouse.org/wp-content/uploads/2014/07/image2.jpg",
    input: "",
    currentChat: null,
    chats: Array(0),
};

//Selector
const reducer = (state,action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                username : action.username,
                avatarUrl : action.avatarUrl,
                currentChat : action.currentChat,
                chats: action.currentChat,
            }
        case 'UPDATE_INPUT':
            return {
                ...state,
                input: action.input
            }
        case 'ADD_EMOTICON':
            return {
                ...state,
                input: action.input
            }
        case 'OPEN_CHAT':
            return {
                ...state,
                currentChat: action.currentChat
            }
        case 'LEAVE_CHAT':
            return {
                ...state,
                currentChat: action.currentChat,
                chats: state.chats.filter((chat)=>chat._id!==action.chatToRemove)
            }
        case 'UPDATE_CHATS':
            return {
                ...state,
                chats : action.chats
            }
        default:
            return state;
 
    }

};

export default reducer;