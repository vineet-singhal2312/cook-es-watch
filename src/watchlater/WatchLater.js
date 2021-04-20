import { HistoryCard } from "../history/HistoryCard";
import { WatchLaterCard } from "./WatchLatercard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
export const WatchLater = () => {
  const { state } = useReduce();
  // console.log(state);

  return (
    <>
      <Header />
      <SideNav />

      <div className="watch-later-main">
        <div className="watch-later-list">
          {state.watchLater.map((item) => (
            <WatchLaterCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
