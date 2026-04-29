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
import { RiFileImageLine, RiCloseLine } from "@remixicon/react";
import { useState, useEffect } from "react";
import SubmitButton from "../form/SubmitButton";
import Image from "next/image";

const CreatePostDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewUrl(objectUrl);

    // Free memory when component unmounts or image changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handleSuccess = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full text-left border p-4 mb-6 rounded-full cursor-text hover:bg-muted/50">
          <p className="text-muted-foreground">What are you building today?</p>
        </button>
      </DialogTrigger>

      <DialogContent className="z-101 sm:max-w-2xl" showCloseButton={false}>
        <FormContainer
          action={createPostAction}
          onSuccess={handleSuccess}
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

          {previewUrl && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted mt-2">
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                className="object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-background/80 backdrop-blur-sm rounded-full border hover:bg-background transition"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-full text-muted-foreground hover:bg-muted transition">
              <RiFileImageLine className="w-5 h-5 text-muted-foreground" />
              <input
                type="file"
                name="imageUrl"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {selectedImage ? "Change Image" : "Add Image"}
            </label>
            {selectedImage && (
              <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                {selectedImage.name}
              </span>
            )}
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
