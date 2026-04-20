"use client";
import { fetchCommentsAction } from "@/actions/post-actions";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import CommentListSkeleton from "./CommentListSkeleton";

const CommentContainer = ({ postId }: { postId: string }) => {

  const { user } = useUser();

  const {data: comments, isLoading, refetch} = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchCommentsAction(postId)
   })

  return (
    <div className="w-full">
      <CommentForm postId={postId} user={user} onSuccess={() => refetch()} />

      {isLoading ? <CommentListSkeleton/> :!comments ||comments.length === 0 ? (
        <h3 className="text-base font-semibold capitalize">No Comments yet.</h3>
      ) : (
        <div className="space-y-6">
          {comments?.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CommentContainer;
