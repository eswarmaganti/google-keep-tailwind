import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Remainders from "./pages/Remainders";
import EditNotes from "./pages/EditNotes";
import Trash from "./pages/Trash";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/remainders" element={<Remainders />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/edit/notes/:id" element={<EditNotes />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
