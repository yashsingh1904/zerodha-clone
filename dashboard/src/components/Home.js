import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    // Check if token is in URL (coming from login redirect)
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    const urlUsername = params.get("username");

    if (urlToken && urlUsername) {
      // Save to dashboard's localStorage
      localStorage.setItem("token", urlToken);
      localStorage.setItem("username", urlUsername);
      // Clean URL without reloading
      window.history.replaceState({}, document.title, "/");
    }

    // Now check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "https://zerodha-clone-qri3.vercel.app/login";
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;