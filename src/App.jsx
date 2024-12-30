import React, { useEffect, useState } from "react";
import axios from "axios";
import ListView from "./components/ListView";

const App = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    setErrors(""); 
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setUsers(response.data.products);
    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <ListView users={users} loading={loading} errors={errors} />;
};

export default App;