import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CommentForm = () => {
  return (
    <div className="mb-6 space-y-4">
      <h3 className="text-lg font-semibold capitalize">Comments</h3>

      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={"https://github.com/shadcn.png"} alt={"user"} />
          <AvatarFallback>{"U"}</AvatarFallback>
        </Avatar>

        <div className="flex items-center w-full gap-2">
          <Input
            name="comment"
            placeholder="Write a comment..."
            className="h-9"
          />

          <Button size="sm" className="h-9 px-3">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
