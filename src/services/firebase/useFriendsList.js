function useFriendsList(fStore) {
    const ref = fStore().collection('users');
  
    const getFriendsList = (userId) => ref.get();
  
  
    return {
      getFriendsList
    }
  
  }
  export default useFriendsList;