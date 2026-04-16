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
import { Input } from "../ui/input";
import { RiFileImageLine } from "@remixicon/react";
import { useState } from "react";
import SubmitButton from "../form/SubmitButton";

const CreatePostDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="border p-4 mb-6 rounded-full cursor-text hover:bg-muted/50">
          <p className="text-muted-foreground">What are you building today?</p>
        </div>
      </DialogTrigger>

      <DialogContent className="z-101 sm:max-w-2xl" showCloseButton={false}>
        <FormContainer
          action={createPostAction}
          onSuccess={() => setOpen(false)}
          className="space-y-4"
        >
          <DialogHeader>
            <DialogTitle>Create Post</DialogTitle>
            <DialogDescription>Write Something</DialogDescription>
          </DialogHeader>

          <Input
            type="text"
            id="title"
            name="title"
            placeholder="add post title (optional)"
          />

          <Textarea
            id="postContent"
            name="postContent"
            placeholder="Share your idea, code, or progress..."
            required
            className="min-h-[150px] resize-none no-scrollbar max-h-[200px] overflow-y-auto px-4"
          />

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-full text-muted-foreground hover:bg-muted transition">
              <RiFileImageLine className="w-5 h-5 text-muted-foreground" />
              <input
                type="file"
                name="imageUrl"
                accept="image/*"
                className="hidden"
              />
              Add Image
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" size="lg" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <SubmitButton text="Post" />
          </DialogFooter>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
