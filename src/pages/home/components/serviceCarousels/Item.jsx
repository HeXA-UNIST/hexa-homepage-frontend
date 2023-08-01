
import "@css/home/Services.css";

function Item({ item }) {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + item.image}
        alt={item.title}
        style={{ width: "100%", height: "670px" }}
      />
    </div>
  );
}

export default Item;
