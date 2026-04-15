import { fetchAllPostAction } from "@/actions/post-actions";
import CreatePostDialog from "@/components/post/CreatePostDialog";
import PostContentCard from "@/components/post/PostContentCard";

const DashboardPage = async () => {
  const posts = await fetchAllPostAction();

  console.log(posts);

  if (posts?.length === 0) {
    return <h1 className="text-2xl">Post not found</h1>;
  }

  return (
    <>
      <CreatePostDialog />
      <div className="space-y-6 mt-8">
        {posts?.map((post) => {
          return (
            <PostContentCard key={post.id} postContent={post.postContent} />
          );
        })}
      </div>
    </>
  );
};

export default DashboardPage;
