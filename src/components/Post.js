import React from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions
          Icon={ThumbUpOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOptions
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        />
        <InputOptions
          Icon={ShareOutlinedIcon}
          title="Share"
          color="gray"
        />
        <InputOptions
          Icon={SendOutlinedIcon}
          title="Send"
          color="gray"
        />
      </div>
    </div>
  );
}

export default Post;
