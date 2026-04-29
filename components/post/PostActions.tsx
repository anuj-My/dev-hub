"use client";

import {
  RiBookmarkLine,
  RiBookmarkFill,
  RiChat1Fill,
  RiChat1Line,
  RiHeartFill,
  RiHeartLine,
} from "@remixicon/react";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import CommentContainer from "../comment/CommentContainer";
import { Separator } from "../ui/separator";
import { toggleBookmarkAction, togglePostLikeAction } from "@/actions/post-actions";
import { toast } from "sonner";

const PostActions = ({
  postId,
  isBookmarked: initialIsBookmarked = false,
}: {
  postId: string;
  isBookmarked?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const [isPending, startTransition] = useTransition();

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked); 
    
    startTransition(async () => {
      const res = await toggleBookmarkAction(postId);
      toast(res.message);
      
      if (!res.success) {
        setIsBookmarked(!isBookmarked);
      }
    });
  };

  const toggleLike = () =>{
    setIsLiked(!isLiked)
    startTransition(async () =>{
      const res = await togglePostLikeAction(postId);
      toast(res.message);

      if(!res.success){
        setIsLiked(!isLiked)
      }
    })
  }

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon-lg"
          className={`w-8 h-8 rounded-full ${isLiked && "border-primary"}`}
            onClick={toggleLike}
            disabled={isPending}
          >
            {isLiked ? <RiHeartFill className="text-primary" /> : <RiHeartLine />}
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
          className={`w-8 h-8 rounded-full ${showComments && "border-primary"}`}
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? <RiChat1Fill className="text-primary"  /> : <RiChat1Line />}
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon-lg"
          className={`w-8 h-8 rounded-full ${isBookmarked && "border-primary"}`}
          onClick={toggleBookmark}
          disabled={isPending}
        >
          {isBookmarked ? <RiBookmarkFill className="text-primary" /> : <RiBookmarkLine />}
        </Button>
      </div>

      {showComments && <Separator className="my-2" />}

      {showComments && <CommentContainer postId={postId} />}
    </>
  );
};

export default PostActions;
