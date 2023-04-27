import React from "react";
import BookingForm from "./BookingForm.js";

const MODAL_STYLES = {
  position: 'fixed',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fbdabb",
  padding: "20px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

function ConfirmationModal({ open, children }) {
  if (!open) return null;

  return (
    <>
    <div style={OVERLAY_STYLES} />
      <div className="modal" style={MODAL_STYLES}>
        {children}
      </div>
    </>
  );
}

export default ConfirmationModal;
