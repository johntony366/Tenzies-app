import { Button } from "@mui/material";

export default function Die({ onClickHandler, value, id, isSuppressed }) {
  return (
    <div className="die">
      <Button
        variant="contained"
        sx={{
          padding: 0,
          minWidth: 0,
          width: 80,
          height: 80,
          bgcolor: isSuppressed ? "success.light" : "grey.200",
          color: "grey.900",
          "&:hover": { bgcolor: isSuppressed ? "success.main" : "grey.300" },
        }}
        onClick={onClickHandler}
        id={id}
      >
        {value}
      </Button>
    </div>
  );
}
