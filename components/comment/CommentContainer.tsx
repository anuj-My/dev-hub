import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const CommentContainer = () => {
  return (
    <div className="w-full">
      <CommentForm />

      <div>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentContainer;
