import "./friends.css";

export const Friends = (props) => {
  return (
    <div className="friends">
      <div className="friend">
        <img src={props.img} alt="" />
        <span>{props.name}</span>
      </div>
    </div>
  );
};
