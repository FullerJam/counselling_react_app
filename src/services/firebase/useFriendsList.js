function useFriendsList(fStore) {
  const ref = fStore().collection('users');

  const getFriendsList = (user) =>
    ref
      .get();

  const createDirectMsgRepo = (chatId, userId, receiverImgUrl,senderImgUrl) =>
    ref



  return {
    getFriendsList,
    createDirectMsgRepo
  }

}
export default useFriendsList;