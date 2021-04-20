import { HistoryCard } from "./HistoryCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
export const History = () => {
  const { state, dispatch } = useReduce();
  // console.log(state);

  return (
    <>
      <Header />
      <SideNav />

      <div className="history-main">
        <button
          className="history-clear-btn"
          onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
        >
          Clear All
        </button>
        <div className="history-video-list">
          {state.history.map((item, idx) => (
            <HistoryCard item={item} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
