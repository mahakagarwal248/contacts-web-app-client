import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";

import "./ContactInfo.css";
import contacts from "../Contacts.json";
import Navbar from "../Navbar/Navbar";
import MessageModal from "../MessageModal/MessageModal";

function ContactInfo() {
  const { id } = useParams();
  let phone=''
  let name = ''
  return (
    <div>
      <Navbar />
      <div className="container backBtn">
        <Link
          to="/contactList"
          style={{ textDecoration: "underline", color: "black" }}
        >
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
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.map((person) =>
            person.id === parseInt(id) ? (
              phone = person.phone,
              name = person.name,
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
      <MessageModal phone={phone} name={name} />
    </div>
  );
}

export default ContactInfo;
