import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostActions from "./PostActions";

type PostPropsType = {
  title?: string;
  postContent: string;
  imageUrl?: string;
  authorImage?: string;
  authorName?: string;
};

const PostContentCard = ({ post }: { post: any }) => {
  const { id, title, imageUrl, postContent, authorName, authorImage, bookmarks, likes } = post;
  const isBookmarked = bookmarks?.length > 0;
  const isLiked = likes?.length > 0;

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
      <CardContent className="text-lg">
        <p className="whitespace-pre-wrap">{postContent}</p>
        {imageUrl && (
          <div className="relative w-full mt-4 rounded-xl overflow-hidden border bg-muted/30 max-h-[500px] flex items-center justify-center">
            <Image
              src={imageUrl}
              alt="Post image"
              width={800}
              height={600}
              priority={true}
              className="w-auto h-auto max-w-full max-h-[500px] object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col w-full gap-4">
        <PostActions postId={id} isBookmarked={isBookmarked} isLiked={isLiked} />
      </CardFooter>
    </Card>
  );
};

export default PostContentCard;
