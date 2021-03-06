import React from "react";

import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import Metatags from "../../components/Metatags";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);

  // if there are no users, link to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, //passes to the page component as props
  };
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <Metatags
        title={user.username}
        description={`${user.username}'s public profile`}
        image={null}
      />
      <UserProfile user={user} />
      <PostFeed posts={posts} admin />
    </main>
  );
}
