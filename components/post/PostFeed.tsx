import { fetchAllPostAction } from "@/actions/post-actions";
import PostContentCard from "@/components/post/PostContentCard";
import SectionTitle from "../shared/SectionTitle";
import FeedWrapper from "./PostFeedWrapper";

const PostFeed = async () => {
  const posts = await fetchAllPostAction();

  if (posts?.length === 0) {
    return <SectionTitle text="No post created yet." />;
  }

  return (
    <FeedWrapper>
      {posts?.map((post) => {
        return <PostContentCard key={post.id} post={post} />;
      })}
    </FeedWrapper>
  );
};

export default PostFeed;
