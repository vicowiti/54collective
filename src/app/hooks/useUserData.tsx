import { useState, useEffect } from "react";

// Define the user type (adjust based on your data structure)
interface User {
  createdAt: string;
  email: string;
  gender: string;
  isAdmin: boolean;
  name: string;
  phoneNumber: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

// Custom hook to manage and access user data
export const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [change, setChange] = useState(false)

  useEffect(() => {
    // On initial load, get the user data from localStorage (or cookie)
    const userData = localStorage.getItem("user"); // Example: could use cookies instead

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [change]);

  const setUserData = (userData: User) => {
    // Save to localStorage (or cookie)
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setChange(!change)
  };

  const clearUserData = () => {
    // Clear from localStorage (or cookie)
    localStorage.removeItem("user");
    setUser(null);
    setChange(!change)
  };

  return { user, setUserData, clearUserData };
};
