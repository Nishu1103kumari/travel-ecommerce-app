import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Dummy user for login
const dummyUser = {
  name: "Nishu Kumari",
  email: "nishu@example.com",
  profileImage: "https://ui-avatars.com/api/?name=Nishu+Kumari",
  joined: "March 2024",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simple check – in real app, you'd call backend here
    if (email === dummyUser.email && password === "123456") {
      setUser(dummyUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
