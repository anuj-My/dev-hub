import CreatePostDialog from "@/components/post/CreatePostDialog";
import PostFeed from "@/components/post/PostFeed";

const DashboardPage = async () => {
  return (
    <>
      <CreatePostDialog />
      <PostFeed />
    </>
  );
};

export default DashboardPage;
