import React from "react";
import CustomerContactForm from "./CustomerContactForm.js";
import homeIcon from "../assets/homeIcon.svg";

const MODAL_STYLES = {
  position: 'fixed',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fbdabb",
  padding: "50px",
  zIndex: 1000
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

function ResConfirm({ open, children }) {
  if (!open) return null;

  return (
    <>
    <div style={OVERLAY_STYLES} />
      <div className="modal" style={MODAL_STYLES}>
        <a href="/">
          <img src={homeIcon} alt="home icon" />
        </a>
        {children}
      </div>
    </>
  );
}

export default ResConfirm;
