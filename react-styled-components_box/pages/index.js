import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName color="green" />
      <BoxWithClassName color="black" />
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </div>
  );
}
