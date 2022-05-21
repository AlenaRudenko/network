import { IPostdataItem } from "../../../../redux/store";
import "./Post.css";

export const Post = (props: IPostdataItem) => {
  return (
    <div>
      <div className="posts_item">
        <div className="post__element">
          <img
            alt=""
            src="https://i.kym-cdn.com/photos/images/newsfeed/001/384/542/f03.jpg"
          />
          {props.text}
        </div>
        <div className="posts__likes">
          <span>❤</span>
          {props.likesCount}
        </div>
      </div>
    </div>
  );
};
