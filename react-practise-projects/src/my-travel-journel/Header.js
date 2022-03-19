import React from "react";
import "./header.css";
import PublicIcon from "@mui/icons-material/Public";

export default function Header() {
  return (
    <div>
      <header>
        <PublicIcon style={{ fontSize: 50 }} />
        <p>my travel journal</p>
      </header>
    </div>
  );
}
