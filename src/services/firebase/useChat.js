function useChat(fStore) {
    const ref = fStore().collection('users');

    const readChatMsgs = userId =>
      ref
        .doc(userId)
        .collection("chat")
        .orderBy("time", "asc")
        .get();
    
        const writeChatMsg = (id, newMsg) =>
      ref
        .doc(id)
        .collection("chat")
        .add(newMsg)

    return { 
        readChatMsgs,
        writeChatMsg
     }

}
export default useChat;

  