function useDateSelect(fStore) {
  const ref = fStore().collection('appointments');

  const createAppointment  = appointment => ref.add(appointment);

  const readAppointments = user => ref.where("userId", "==", user.uid).orderBy("timeStamp", "desc").get();

  return {createAppointment, readAppointments}

}
export default useDateSelect;