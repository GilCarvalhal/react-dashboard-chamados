import { useState, useEffect, createContext } from "react";
import { auth, db } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert("Logado com sucesso!");
  }

  // Cadastrar um novo user
  async function signUp(email, password, name) {
    setLoadingAuth(true);

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      setLoadingAuth(false);
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null,
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null,
          };

          setUser(data);

          setLoadingAuth(false);
        });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // !! faz com que o valor seja sempre booleano.
        user,
        signIn,
        signUp,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
