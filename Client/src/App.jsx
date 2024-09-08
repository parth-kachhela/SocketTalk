import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Auth from "./pages/auth/index"; // Update the import statement
import Chat from "./pages/chat/index";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
