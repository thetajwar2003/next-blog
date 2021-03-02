import Link from "next/link";
import React from "react";

export default function PostFeed({ posts, admin }) {
  return posts
    ? posts.map((post) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))
    : null;
}

function PostItem({ admin = false, post }) {
  // calculate word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minsToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <a>
          <strong>By @{post.username}</strong>
        </a>
      </Link>

      <Link href={`/${post.username}/${post.slug}`}>
        <h2>
          <a>{post.title}</a>
        </h2>
      </Link>

      <footer>
        <span>
          {wordCount} words. {minsToRead} min read
        </span>
        <span className="push-left"> ❤️ {post.heartCount || 0} Hearts</span>
      </footer>
    </div>
  );
}
