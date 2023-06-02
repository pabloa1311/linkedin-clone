import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Pablo Ramirez",
      description: "This is a test",
      message: message,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("")
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Whats up?"
              value={message}
              onChange={handleMessage}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={ArticleIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl, } }) => (
        <Post
          key={id}  
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
