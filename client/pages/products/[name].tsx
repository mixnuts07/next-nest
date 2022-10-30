import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>商品{router.query.name}のページです</h1>
    </div>
  );
};

export default Name;
