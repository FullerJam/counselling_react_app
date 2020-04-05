function useFriendsList(fStore) {
    const ref = fStore().collection('users');
  
    const getFriendsList = (userId) => ref.get();
  
  
    // ref
    //   .doc(userId)
    //   .collection("chat")
    //   .orderBy("time", "asc")
    //   .get();
  
    //   const writeChatMsg = (userId, newMsg) =>
    // ref
    //   .doc(id)
    //   .collection("chats")
    //   .add(newMsg)
  
    return {
      getFriendsList
    }
  
  }
  export default useFriendsList;