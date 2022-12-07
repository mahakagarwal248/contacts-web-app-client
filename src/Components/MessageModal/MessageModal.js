import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

import "../ContactInfo/ContactInfo.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function MessageModal({ phone, name }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [success, setSuccess] = React.useState(false);

  const code = Math.floor(100000 + Math.random() * 900000);

  const handleSend = async () => {
    const apiCall = await axios
      .post("https://comfortable-frog-jumpsuit.cyclic.app/sendMessage", {
        phoneNumber: phone,
        message: `Hi Your code is: ${code}`,
        name: name,
      })
      .then((res) => {
        return res;
      });

    apiCall.status === 200 ? setSuccess(true) : <></>;
  };

  return (
    <div>
      <Button onClick={handleOpen} className="sendBtn">
        Send Message
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="closeBtn" onClick={handleClose}>
            X
          </button>
          {success ? (
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              Code sent successfully
            </Typography>
          ) : (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ textAlign: "center", marginTop: "30px" }}
              >
                Hi your OTP is: {code}
              </Typography>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Button className="sendBtn" onClick={handleSend}>
                  Send
                </Button>
              </div>
            </>
          )}
          <br />
        </Box>
      </Modal>
    </div>
  );
}

export default MessageModal;
