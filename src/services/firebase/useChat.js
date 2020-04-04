function useChat(fStore) {
    const ref = fStore().collection('users');

    const readChatMsgs = userId =>
      ref
        .doc(userId)
        .collection("chats")
        .orderBy("time", "asc")
        .get();
    
        const writeChatMsg = (userId, newMsg) =>
      ref
        .doc(userId)
        .collection("chats")
        .add(newMsg)

    return { 
        readChatMsgs,
        writeChatMsg
     }

}
export default useChat;

  