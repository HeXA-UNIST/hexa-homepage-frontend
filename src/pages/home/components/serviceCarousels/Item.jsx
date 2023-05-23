import { Paper } from "@mui/material";
import "@css/home/services.css";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={process.env.PUBLIC_URL + item.image}
        alt={item.title}
        style={{ width: "100%", height: "100%" }}
      />
    </Paper>
  );
}

export default Item;
