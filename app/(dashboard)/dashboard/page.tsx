import CreatePostDialog from "@/components/post/CreatePostDialog";
import PostFeedContainer from "@/components/post/PostFeedContainer";

const DashboardPage = async () => {
  return (
    <>
      <CreatePostDialog />
      <PostFeedContainer />
    </>
  );
};

export default DashboardPage;
