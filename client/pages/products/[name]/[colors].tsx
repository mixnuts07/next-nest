import { useRouter } from "next/router";
import Link from "next/link";

const Colors = () => {
  const router = useRouter();
  console.log(router.query);
  const { colors, name } = router.query;
  return (
    <div>
      <h3>
        {name}の色は{colors}です
      </h3>
      <Link href="/">BACK</Link>
    </div>
  );
};
export default Colors;
