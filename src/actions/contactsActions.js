// action creator for adding user
export const addUser = (newUser) => {

    return (dispatch, getState, {getFirestore}) => {
            const firestore = getFirestore();
            firestore.collection("contacts").add(newUser)
            .then(res =>{
                console.log("contact added sucessfully")
            } )
            .catch(err =>{
                console.log("error occured")
            })
        }
    }

// action creator for deleting user
export const deleteUser = (User_id) => {
 
    return ( dispatch, getState,{getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection("contacts").doc(User_id).delete()
        .then(res =>{
            console.log("deleted successfully" )
        })
        .catch(err =>{
            console.log("error occured")
        })
    }
   };
      // action creator for editing user
export const editUser = (updatedUser) => {
    console.log(updatedUser)
    return(dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection("contacts").doc(updatedUser.id).set(updatedUser)
        .then(res =>{
            console.log("contact updated successfully")
        })
        .catch(err => {
            console.log("error occured")
        })
    }
   }; 