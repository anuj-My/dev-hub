import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiBookmarkLine,
  RiChat1Line,
  RiHeartFill,
  RiHeartLine,
} from "@remixicon/react";
import { Post } from "@/lib/generated/prisma/client";

type PostPropsType = {
  title?: string;
  postContent: string;
  imageUrl?: string;
  authorImage?: string;
  authorName?: string;
};

const PostContentCard = ({ post }: { post: Post }) => {
  const isLiked = false;
  const { title, imageUrl, postContent, authorName, authorImage } = post;
  return (
    <Card className="w-full">
      <CardHeader className="space-y-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={authorImage || "https://github.com/shadcn.png"}
              alt={authorName || "author"}
            />
            <AvatarFallback> {authorName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight capitalize">
            <span className="font-medium">{authorName}</span>
            <span className="tex-xs text-muted-foreground">posted on</span>
          </div>
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg">{postContent}</CardContent>
      <CardFooter className="justify-between">
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon-lg"
            className="w-8 h-8 rounded-full"
          >
            {isLiked ? <RiHeartFill /> : <RiHeartLine />}
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            className="w-8 h-8 rounded-full"
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
      </CardFooter>
    </Card>
  );
};

export default PostContentCard;
