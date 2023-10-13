import Game from "./game";
import BannerReview from "../components/BannerReview.jsx";
import Categories from "../components/Categories";

export const Home = () => {
  return (
    <>
      <Game element={<Game />} />
      <BannerReview />
      <Categories />
    </>
  );
};
