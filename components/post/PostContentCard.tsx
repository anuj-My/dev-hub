import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
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

// type PostPropsType = {

// };

const PostContentCard = ({ postContent }: { postContent: string }) => {
  console.log(postContent);
  return (
    <Card className="w-full">
      <CardHeader className="space-y-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight capitalize">
            <span className="font-medium">posted by</span>
            <span className="tex-xs text-muted-foreground">posted on</span>
          </div>
        </div>

        <CardTitle>post title</CardTitle>
      </CardHeader>
      <CardContent>{postContent}</CardContent>
      <CardFooter className="justify-between">
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full"
          >
            <RiHeartLine />
            <RiHeartFill />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full"
          >
            <RiChat1Line />
          </Button>
        </div>
        <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
          <RiBookmarkLine />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostContentCard;
