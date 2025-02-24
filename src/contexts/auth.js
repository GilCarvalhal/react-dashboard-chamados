import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, serUser] = useState(null);

  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert("Logado com sucesso!");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // false
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
