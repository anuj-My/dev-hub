import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { fetchUserPostsAction } from "@/actions/post-actions";
import SectionTitle from "@/components/shared/SectionTitle";
import PostContentCard from "@/components/post/PostContentCard";
import FeedWrapper from "@/components/post/PostFeedWrapper";

const ProfilePage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const posts = await fetchUserPostsAction();

  return (
    <div className="w-full space-y-8">
      <SectionTitle text="Profile" />
      
      <div className="p-8 bg-card border rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6">
        {user.imageUrl ? (
          <Image 
            src={user.imageUrl} 
            alt="Profile Image" 
            width={100} 
            height={100} 
            className="rounded-full border shadow-sm"
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-muted border flex items-center justify-center">
            <span className="text-2xl text-muted-foreground">{user.firstName?.charAt(0) || "A"}</span>
          </div>
        )}
        <div className="text-center md:text-left mt-2 md:mt-0">
          <h2 className="text-2xl font-bold">{user.fullName || "Anonymous User"}</h2>
          <p className="text-muted-foreground">{user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>

      <div>
        <SectionTitle text="Your Posts" />
        {posts.length === 0 ? (
          <p className="text-muted-foreground mt-4">You haven't posted anything yet.</p>
        ) : (
          <FeedWrapper className="mt-4">
            {posts.map((post) => (
              <PostContentCard key={post.id} post={post} />
            ))}
          </FeedWrapper>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;