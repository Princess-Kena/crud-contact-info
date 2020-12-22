const initialState ={
    users:[
        {name: "Anita", email:"ann@gmail.comm", gen: "23", address:"kasoa"},
        {name: "Paa", email:"paa@gmail.comm", gen: "15", address:"dome"},
        {name: "Danny", email:"danny@gmail.comm", gen: "7", address:"fise"}

  ],
};
const contactsReducers =(state =initialState, action ) =>{
switch (action.type) {
    case "ADD_CONTACT":
        return state;

    default:
        return state;
}    
    
};
export default contactsReducers;