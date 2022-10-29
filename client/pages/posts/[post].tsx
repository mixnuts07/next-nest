import Link from "next/link";

export default function post({ post }) {
  return (
    <div>
      <h1>POST PAGE</h1>
      <p className="underline text-blue">{post.title}</p>
      <Link href="/posts">Go to Posts Page</Link>
      <h3>{post.body}</h3>
    </div>
  );
}
// paramsにはpost.idオブジェクト{ post: '1' }が入る。
// →ダイナミックルーティングを利用しているため。
// (params, res, req, query)なども取得できる。
// context(ctx)でアクセスしてきた情報を一気に取得できる
export async function getServerSideProps({ params }) {
  console.log(params);
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);
  console.log(Object.keys(post).length);
  // IDが存在しない時{}の処理
  if (Object.keys(post).length === 0) {
    return { notFound: true };
  }
  return { props: { post } };
}
