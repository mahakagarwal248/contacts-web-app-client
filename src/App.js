import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import ContactList from "./Components/ContactList/ContactList";
import Home from "./Components/Home";
import SentMessages from "./Components/SentMessages/SentMessages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactList" element={<ContactList />} />
          <Route exact path="/sentMessages" element={<SentMessages />} />
          <Route exact path="/contactInfo/:id" element={<ContactInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
