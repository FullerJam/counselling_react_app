function useDateSelect(fStore) {
  const apptRef = fStore().collection('appointments');

  const createAppointment = appointment => apptRef.add(appointment);

  const readAppointments = user => apptRef.where("userId", "==", user.uid).orderBy("timeStamp", "desc").get();

  const cancelAppointment = id => {
    console.log("hook id is: " + id)
    apptRef.doc(id).delete().then(() => {
      alert("Appointment successfully cancelled! Records will be removed on next page refresh");
    }).catch(function (error) {
      alert.error("Error removing document: ", error);
    });
    // console.log(queryRef)

  }

  // db.collection("cities").doc("DC").delete().then(function () {
  //   console.log("Document successfully deleted!");
  // }).catch(function (error) {
  //   console.error("Error removing document: ", error);
  // });

  return { createAppointment, readAppointments, cancelAppointment }

}
export default useDateSelect;