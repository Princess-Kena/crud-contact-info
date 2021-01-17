const initialState ={
    users: [
        {
          name: "Michael Ackortia",
          number: "0243000000",
          address: "Awoshie-Accra",
          type :"Friend",
          id: "ggnikt668"
        },
        {
          name: "Princess Kena",
          number: "0551567537",
          address: "Kasoa-Accra",
          type: "Family",
          id: "bdhfj4i75"
        },
        {
          name: "Rose Issakah",
         number: "0557566267",
         address: "Akotsi-C/R",
          type: "Classmate",
          id: "rgfmhfu68,"
        },
        {
          name: "Keziah Obiri",
          number: "0248345631",
          address: "Tafo-E/R",
          type:"Cousin",
          id: "ghyegn364587"
        },
      ]
};
const contactsReducers =(state =initialState, action ) =>{
switch (action.type) {
    case "ADD_CONTACT":
        return {...state, users: [...state.users,action.payload]};

        case "DELETE_USER":
   const filteredUsers = state.users.filter(user =>user.id !==action.payload);
   return {...state, users: filteredUsers}
    
        case "EDIT_USER":
          return {...state, users: state.users.map((user) =>
           user.id === action.payload.id ?action.payload  : user
        ),}
           default:
              return state;
        
       
}    
    
};
export default contactsReducers;