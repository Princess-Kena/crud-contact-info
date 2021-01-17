// action creator for adding user
export const addUser = (newUser) => {
    
    return{
        type: "ADD_USER",
        payload: newUser
    }
}
// action creator for deleting user
export const deleteUser = (User_id) => {
 
    return{
           type: "DELETE_USER",
           payload: User_id
       }
   }
      // action creator for editing user
export const editUser = (updatedUser) => {
 
    return{
           type: "EDIT_USER",
           payload:updatedUser,
       }
   }