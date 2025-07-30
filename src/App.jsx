import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import { useState } from 'react';
import { v1 as uuidv1 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import Settings from "./Settings";
import Upgrade from "./Upgrade";

function App() {
  console.log("App component starting to render..."); // Debug log 1
  
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  
  console.log("About to generate UUID..."); // Debug log 2
  const [currThreadId, setCurrThreadId] = useState(() => {
    console.log("Generating UUID..."); // Debug log 3
    return uuidv1();
  });
  
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  console.log("App render complete, returning JSX..."); // Debug log 4

  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  };

  return (
    <MyContext.Provider value={providerValues}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <div className='app'>
                <Sidebar />
                <ChatWindow />
              </div>
            </PrivateRoute>
          } 
        />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;