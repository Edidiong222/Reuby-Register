import React, { useEffect, useState } from "react";
import { db } from "./firebase"; 
import { collection, addDoc, getDocs } from "firebase/firestore";
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./SignUp";
import Info from "./Info";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [users, setUsers] = useState([]);

  const fetchInfo = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersInfo = querySnapshot.docs.map(doc => doc.data());
    setUsers(usersInfo);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        phone
      });

    toast.success("Added Succesfully")

      console.log("Document written with ID: ", docRef.id);
      fetchInfo();
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error adding document");
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <div className="navButtons">
            <Link className="but" to="/info">
              <button>Info</button>
            </Link>
            <Link className="but" to="/">
              <button>SignUp</button>
            </Link>
          </div>
        </nav>

        <div className="cover">
          <Routes>
            <Route 
              path="/" 
              element={
                <SignUp
                  setName={setName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  name={name}
                  email={email}
                  phone={phone}
                  handleSubmit={handleSubmit}
                />
              } 
            />
            <Route 
              path="/info" 
              element={
                <Info 
                  users={users} 
                />
              } 
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer /> {/* ToastContainer should be placed here */}
    </div>
  );
};

export default SignUpForm;
