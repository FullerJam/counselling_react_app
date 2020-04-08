

function useChat(fStore) {
  const ref = fStore().collection('direct_messages');

  const writeChatMsg = (newMsg, chatId) =>
    ref
      .doc(chatId)
      .collection("messages_repo")
      .add(newMsg)

  const createDirectMsgRepo = (chatId, dmrObject) =>
    ref
    .doc(chatId)
    .set(dmrObject)
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
    writeChatMsg,
    createDirectMsgRepo
  }

}
export default useChat;

