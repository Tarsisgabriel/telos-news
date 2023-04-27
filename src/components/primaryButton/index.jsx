import React from "react";
import "./index.css";
import LoginIcon from "@mui/icons-material/Login";

function PrimaryButton() {
  return (
    <button className="primaryButton">
      <LoginIcon sx={{ fontSize: "16px" }} />
      Entrar
    </button>
  );
}

export default PrimaryButton;
