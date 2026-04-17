import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Prisma } from "@/lib/generated/prisma/client";
import { RiChat1Line, RiHeartLine } from "@remixicon/react";

type CommentWithUser = Prisma.CommentGetPayload<{
  include: { user: true };
}>;

const CommentCard = ({ comment }: { comment: CommentWithUser }) => {
  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage
          src={comment?.user?.imageUrl || "https://github.com/shadcn.png"}
          alt={comment?.user?.name || "user"}
        />
        <AvatarFallback>{comment?.user?.name?.charAt(0) || "U"}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium capitalize">{comment?.user?.name}</span>
          <span className="text-muted-foreground text-xs">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>

        <p className="text-sm leading-relaxed">{comment.comment}</p>

        <div className="flex items-center gap-2 pt-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-muted-foreground"
          >
            <RiHeartLine className="w-4 h-4 mr-1" />
            Like
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-muted-foreground"
          >
            <RiChat1Line className="w-4 h-4 mr-1" />
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
