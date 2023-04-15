import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ResDataContext = createContext({
  reservationData: {},
  setReservationData: () => {},
  onSubmit: () => {},
});

function ResDataProvider(props) {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState({});

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Submit the form data here using an API call or any other method
    setReservationData(values);
    console.log(reservationData);

    actions.setSubmitting(false);
    actions.resetForm();
    actions.setStatus({ success: true });

    // Redirect to customer contact page
    navigate("/reservations/customerContact");
  };

  return (
    <ResDataContext.Provider
      value={{ reservationData, setReservationData, onSubmit }}
    >
      {props.children}
    </ResDataContext.Provider>
  );
}

export default ResDataProvider;
