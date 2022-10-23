import { useRouter } from "next/router";

const Colors = () => {
  const router = useRouter();
  console.log(router.query);
  const { colors, name } = router.query;
  return (
    <div>
      {name}の色は{colors}です
    </div>
  );
};
export default Colors;
