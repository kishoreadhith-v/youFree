'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const TestComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/test");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test Component</h1>
      <p>Message from server: {message}</p>
    </div>
  );
};

export default TestComponent;
