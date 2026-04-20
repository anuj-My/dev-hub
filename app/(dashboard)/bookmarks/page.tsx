import { fetchBookmarkedPostsAction } from "@/actions/post-actions";
import PostContentCard from "@/components/post/PostContentCard";
import SectionTitle from "@/components/shared/SectionTitle";
import FeedWrapper from "@/components/post/PostFeedWrapper";

const BookmarkPage = async () => {
  const bookmarks = await fetchBookmarkedPostsAction();

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div className="w-full">
        <SectionTitle text="Your Bookmarks" />
        <h3 className="text-muted-foreground mt-4">You haven't saved any posts yet.</h3>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SectionTitle text="Your Bookmarks" />
      <FeedWrapper className="mt-8">
        {bookmarks.map((bookmark) => (
          <PostContentCard 
            key={bookmark.id} 
            post={{ ...bookmark.post, bookmarks: [bookmark] }} 
          />
        ))}
      </FeedWrapper>
    </div>
  );
};

export default BookmarkPage;