// import React, { useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// export const ResDataContext = createContext({
//   reservationData: {},
//   setReservationData: () => {},
//   onSubmit: () => {},
// });

// const ResDataProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const onSubmit = async (values, actions, formik) => {
//     try {
//       const response = await fetch("http://localhost:3001/reservations", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formik.values),
//       });
//       const data = await response.json();
//       console.log("Success:", data);
//       actions.resetForm();
//       navigate("/reservations/customerContact");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <ResDataContext.Provider value={{ onSubmit }}>
//       {children}
//     </ResDataContext.Provider>
//   );
// };







// function ResDataProvider(props) {
//   const navigate = useNavigate();
//   const [reservationData, setReservationData] = useState({});

//   const onSubmit = async (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Submit the form data here using an API call or any other method
//     setReservationData(values);
//     console.log(reservationData);

//     actions.setSubmitting(false);
//     actions.resetForm();
//     actions.setStatus({ success: true });

//     // Redirect to customer contact page
//     navigate("/reservations/customerContact");
//   };

//   return (
//     <ResDataContext.Provider
//       value={{ reservationData, setReservationData, onSubmit }}
//     >
//       {props.children}
//     </ResDataContext.Provider>
//   );
// }

// export default ResDataProvider;
