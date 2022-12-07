import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment'

import Navbar from "../Navbar/Navbar";

function SentMessages() {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getSentMessages")
      .then((res) => setMessageList(res));
  }, []);

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
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th style={{verticalAlign:'middle'}}>Name</th>
            <th style={{verticalAlign:'middle'}}>Phone Number</th>
            <th style={{verticalAlign:'middle'}}>Message</th>
            <th style={{verticalAlign:'middle'}}>Sending Time</th>
          </tr>
        </thead>
        <tbody>
          {messageList === []
            ? "Loading"
            : messageList?.data?.map((person) => (
                <tr key={person.id} style={{ cursor: "pointer" }}>
                  <td>{person.name}</td>
                  <td>{person.to}</td>
                  <td>{person.message}</td>
                  <td>{moment(person.sendingTime).format('hh:mm:ss')}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SentMessages;
