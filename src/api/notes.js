import axios from "axios";
const API = "http://localhost:5000/notes";
export const addNotesToDB = async (note) => {
  return await axios.post(`${API}`, note);
};
