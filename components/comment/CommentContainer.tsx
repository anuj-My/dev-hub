"use client";
import { fetchCommentsAction } from "@/actions/post-actions";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import SectionTitle from "../shared/SectionTitle";
import { useEffect, useState } from "react";

import { Prisma } from "@/lib/generated/prisma/client";

type CommentWithUser = Prisma.CommentGetPayload<{
  include: { user: true };
}>;

const CommentContainer = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<CommentWithUser[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchCommentsAction(postId);
      setComments(data || []);
    };
    loadComments();
  }, [postId]);

  return (
    <div className="w-full">
      <CommentForm postId={postId} />

      {comments.length === 0 ? (
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
