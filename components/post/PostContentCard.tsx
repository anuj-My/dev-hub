import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/lib/generated/prisma/client";
import PostActions from "./PostActions";

type PostPropsType = {
  title?: string;
  postContent: string;
  imageUrl?: string;
  authorImage?: string;
  authorName?: string;
};

const PostContentCard = ({ post }: { post: Post }) => {
  const { id, title, imageUrl, postContent, authorName, authorImage } = post;
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
      <CardFooter className="flex-col w-full gap-4">
        <PostActions postId={id} />
      </CardFooter>
    </Card>
  );
};

export default PostContentCard;
