import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useDateSelect(fStore) {
  const ref = fStore.collection('appointments');

  const createAppointment  = appointment => ref.add(appointment);

  const readAppointment = () => ref.get();

  return {createAppointment, readAppointment}

}
export default useDateSelect;