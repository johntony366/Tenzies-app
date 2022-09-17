import React from "react";

import { Box, Grid } from "@mui/material";

export default function Dice({diceElements}) {
  return (
    <Box className="dice">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0}
        sx={{ textAlign: "center" }}
        maxWidth={500}
      >
        {diceElements}
      </Grid>
    </Box>
  );
}
