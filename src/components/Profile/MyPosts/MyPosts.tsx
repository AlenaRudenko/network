import {} from "../../../redux/profileReducer";
import { IProfile } from "../../../redux/store";
import "./MyPosts.css";
import { Post } from "./Post/Post";

interface IProps {
  postsData: IProfile["postsData"];
  newPostText: string;
  updateNewPostText: (value: string) => void;
  addPost: () => void;
}

export const MyPosts = (props: IProps) => {
  // отрисовка постов
  const onHandleChange = (event: any) => {
    props.updateNewPostText(event.target.value);
  };
  const addValue = () => {
    props.addPost();
  };

  let postsElement = props.postsData.map((post) => <Post {...post} />);
  return (
    <div className="posts__block">
      <h3>My posts</h3>
      <div>
        <div className="textbutton__container">
          <textarea
            className="post__text"
            value={props.newPostText}
            onChange={onHandleChange}
            placeholder="New post"
          ></textarea>{" "}
          <button className="post__button" onClick={addValue}>
            Add post
          </button>
        </div>
      </div>
      <div className="posts">{postsElement}</div>
    </div>
  );
};
