import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import "./ContactList.css";
import contacts from "../Contacts.json";
import Navbar from "../Navbar/Navbar";

function ContactList() {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/contactInfo/${id}`);
  };
  return (
    <div>
      <Navbar />
      <div className="container backBtn">
        <Link to="/" style={{ textDecoration: "underline", color: "black" }}>
          <ArrowBackIcon
            style={{
              verticalAlign: "middle",
              fontSize: "18px",
              marginRight: "3px",
            }}
          />
          Back
        </Link>
      </div>
      <Table striped bordered hover className="container contactTableDiv">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.map((person) => (
            <tr
              key={person.id}
              onClick={() => handleRowClick(person.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList;
