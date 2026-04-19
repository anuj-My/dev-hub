import { createCommentAction } from "@/actions/post-actions";
import FormContainer from "../form/FormContainer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import SubmitButton from "../form/SubmitButton";
import { UserResource } from "@clerk/nextjs/types";

const CommentForm = ({
  postId,
  user,
}: {
  postId: string;
  user: UserResource | null | undefined;
}) => {
  return (
    <div className="mb-6 space-y-4">
      <h3 className="text-lg font-semibold capitalize">Comments</h3>

      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName || "user"} />
          <AvatarFallback>{user?.fullName?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>

        <FormContainer
          action={createCommentAction}
          className="flex items-center w-full gap-2"
        >
          <Input name="postId" type="hidden" value={postId} />
          <Input
            name="comment"
            placeholder="Write a comment..."
            className="h-9"
          />

          <SubmitButton text="post" />
        </FormContainer>
      </div>
    </div>
  );
};

export default CommentForm;
