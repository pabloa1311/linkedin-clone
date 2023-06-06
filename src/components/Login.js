import React, { useState } from "react";
import "../styles/Login.css";
import linkedind from "../images/LinkedIn_Logo.png";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [profilePic, setProfilePic] = useState("");

  const register = () => {
    if (!name) {
      return alert("Please enter your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err.message));

    setEmail("");
    setName("");
    setPassword("");
    setProfilePic("");
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      );
    }).catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img src={linkedind} alt="LinkedIn Logo" />

      <form>
        <input
          placeholder="Full name (requiered if registering)"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {" "}
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
