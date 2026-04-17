"use client";

import {
  RiBookmarkLine,
  RiChat1Line,
  RiHeartFill,
  RiHeartLine,
} from "@remixicon/react";
import { useState } from "react";
import { Button } from "../ui/button";
import CommentContainer from "./CommentContainer";

const PostActions = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon-lg"
            className="w-8 h-8 rounded-full"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? <RiHeartFill /> : <RiHeartLine />}
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            className="w-8 h-8 rounded-full"
            onClick={() => setShowComments(!showComments)}
          >
            <RiChat1Line />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon-lg"
          className="w-8 h-8 rounded-full"
        >
          <RiBookmarkLine />
        </Button>
      </div>

      {showComments && <CommentContainer />}
    </>
  );
};

export default PostActions;
