// FloatingButtonToHome.tsx

import React from "react";
import { Fab } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

const FloatingButtonToHome: React.FC = () => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <Fab
        color="secondary"
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <HomeIcon />
      </Fab>
    </a>
  );
};

export default FloatingButtonToHome;
