import Link from "next/link";

export default function index({ posts }) {
  return (
    <div>
      <span className="text-green text-center">
        <h1>POST LIST</h1>
        <Link href="/">BACK</Link>
      </span>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/ssg/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
