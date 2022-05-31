import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function ColorSlider() {
  return (
    <Box sx={{ width: "80%" }}>
      <Slider
        size="small"
        aria-label="Temperature"
        defaultValue={30}
        color="primary"
      />
    </Box>
  );
}
