import React from "react";

import { Box, Grid } from "@mui/material";

import Die from "./Die";

export default function Dice({ dice, handleDieClick }) {
  const diceElements = dice.map((die, i) => {
    return (
      <Grid item xs={12 / 5} key={i}>
        <Die
          value={die.value}
          onClickHandler={handleDieClick}
          isSuppressed={die.isSuppressed}
          id={i}
        />
      </Grid>
    );
  });

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
