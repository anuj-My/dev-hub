import { fetchAllPostAction } from "@/actions/post-actions";
import PostContentCard from "@/components/post/PostContentCard";
import SectionTitle from "../shared/SectionTitle";

const PostFeedContainer = async () => {
  const posts = await fetchAllPostAction();

  if (posts?.length === 0) {
    return <SectionTitle text="Post not found." />;
  }

  return (
    <div className="space-y-6 mt-8">
      {posts?.map((post) => {
        return <PostContentCard key={post.id} postContent={post.postContent} />;
      })}
    </div>
  );
};

export default PostFeedContainer;
