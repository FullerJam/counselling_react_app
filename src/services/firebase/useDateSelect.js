function useDateSelect(fStore) {
  const ref = fStore().collection('appointments');

  const createAppointment  = appointment => ref.add(appointment);

  // const readAppointments = () => ref.get();
  const readAppointments = user => ref.where("userId", "==", user.uid).get();

  return {createAppointment, readAppointments}

}
export default useDateSelect;