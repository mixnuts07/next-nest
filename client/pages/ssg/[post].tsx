import Link from "next/link";

// getStaticPaths.. 作成するページのパス情報をわたす役割を持つ
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // 個別ページのパスを生成
  const paths = posts.map((post) => `/ssg/${post.id}`);
  // const paths = post.map((post)=>{params:{post:post.id.toString()}})
  return {
    paths,
    // false.. paths以外のページにアクセスした場合404エラー
    // true .. ページ読み込みのLoading..を表示できる！
    //https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-pages
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
