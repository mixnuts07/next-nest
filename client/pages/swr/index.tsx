import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Posts() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  if (error) return <h1>Failed to Load...</h1>;
  if (!data) return <h1 className="text-center mx-auto mt-128">LOADING...</h1>;

  return (
    <div>
      <div>
        <h1>SWR POST LIST</h1>
        <Link href="/">BACK</Link>
      </div>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
