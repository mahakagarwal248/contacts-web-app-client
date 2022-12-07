import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Cards.css";

function MenuCard() {
  return (
    <div className="menuDiv">
      <Link to="/contactList" className="menuDiv1">
        <Card
          style={{
            border: "none",
            color: "#ffbb99",
            fontSize: "18px",
            fontWeight: "bold",
            background: "rgb(28, 27, 27)",
            marginTop: "50px",
          }}
          body
        >
          Contact List
        </Card>
      </Link>
      <Link to="/sentMessages" className="menuDiv2">
        <Card
          style={{
            border: "none",
            color: "#ffbb99",
            fontSize: "18px",
            fontWeight: "bold",
            background: "rgb(28, 27, 27)",
            marginTop: "50px",
          }}
          body
        >
          Sent Messages
        </Card>
      </Link>
    </div>
  );
}

export default MenuCard;
