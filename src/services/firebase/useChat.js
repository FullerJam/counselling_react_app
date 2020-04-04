function useChat(fStore) {
  const ref = fStore().collection('users');

  const readChatMsgs = userId =>
    ref
      .doc("chatMessages")
      .collection("chats")
      .orderBy("time", "asc")
      .get();

  const writeChatMsg = (userId, newMsg) =>
    ref
      .doc("chatMessages")
      .collection("chats")
      .add(newMsg)


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
    readChatMsgs,
    writeChatMsg
  }

}
export default useChat;

