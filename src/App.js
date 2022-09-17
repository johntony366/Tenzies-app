import React from "react";

import { Typography, Button, Grid } from "@mui/material";

import Dice from "./components/Dice";
import Die from "./components/Die";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(generateTenDice());

  function simulateDieToss() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function generateTenDice() {
    const arr = new Array(10);
    for (let i = 0; i < 10; ++i) {
      arr[i] = {
        value: simulateDieToss(),
        isSuppressed: false,
        id: i,
      };
    }

    return arr;
  }

  function tossDice() {
    setDice((oldDice) => {
      return oldDice.map((oldDie) => {
        if (oldDie.isSuppressed) {
          return oldDie;
        } else {
          return {
            ...oldDie,
            value: simulateDieToss(),
          };
        }
      });
    });
  }

  function handleDieClick(e) {
    setDice((oldDice) => {
      return oldDice.map((oldDie) => {
        if (Number(e.target.id) === oldDie.id) {
          return {
            ...oldDie,
            isSuppressed: !oldDie.isSuppressed,
          };
        } else {
          return oldDie;
        }
      });
    });
  }

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
    <main className="main">
      <Typography variant="h1">Tenzies</Typography>
      <Typography variant="h5" sx={{ width: 400, color: "grey.600" }}>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </Typography>
      <Dice diceElements={diceElements} />
      <Button variant="contained" sx={{ fontSize: 30 }} onClick={tossDice}>
        Roll
      </Button>
    </main>
  );
}

export default App;
