import { fetchUserStatsAction, fetchUserPostsAction } from "@/actions/post-actions";
import SectionTitle from "@/components/shared/SectionTitle";
import PostContentCard from "@/components/post/PostContentCard";
import FeedWrapper from "@/components/post/PostFeedWrapper";

const DashboardPage = async () => {
  const stats = await fetchUserStatsAction();
  const recentPosts = await fetchUserPostsAction();

  return (
    <div className="w-full space-y-8">
      <SectionTitle text="Dashboard" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-card border rounded-xl shadow-sm flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground font-medium">Total Posts</p>
          <p className="text-4xl font-bold mt-2">{stats.postCount}</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground font-medium">Likes Received</p>
          <p className="text-4xl font-bold mt-2">{stats.likeCount}</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground font-medium">Bookmarks</p>
          <p className="text-4xl font-bold mt-2">{stats.bookmarkCount}</p>
        </div>
      </div>

      <div>
        <SectionTitle text="Recent Activity" />
        {recentPosts.length === 0 ? (
          <p className="text-muted-foreground mt-4">You haven't posted anything yet.</p>
        ) : (
          <FeedWrapper className="mt-4">
            {recentPosts.slice(0, 5).map((post) => (
              <PostContentCard key={post.id} post={post} />
            ))}
          </FeedWrapper>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
