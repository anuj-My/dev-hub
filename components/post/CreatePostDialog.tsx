"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { createPostAction } from "@/actions/post-actions";
import FormContainer from "../form/FormContainer";

const CreatePostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border p-4 rounded-full cursor-text hover:bg-muted/50">
          <p className="text-muted-foreground">What are you building today?</p>
        </div>
      </DialogTrigger>

      <DialogContent className="z-101 sm:max-w-2xl">
        <FormContainer action={createPostAction} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Create Post</DialogTitle>
            <DialogDescription>Write Something</DialogDescription>
          </DialogHeader>

          <Textarea
            id="postContent"
            name="postContent"
            placeholder="Share your idea, code, or progress..."
            required
            className="min-h-[150px] resize-none"
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" size="lg" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" size="lg">
              Post
            </Button>
          </DialogFooter>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
