function useFriendsList(fStore) {
  const ref = fStore().collection('users');

  const getFriendsList = (user) =>
    ref
      .get();


  return {
    getFriendsList
  }

}
export default useFriendsList;