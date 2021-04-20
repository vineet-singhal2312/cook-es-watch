import ReactPlayer from "react-player";
import { MdDelete } from "react-icons/md";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";

export const HistoryCard = ({ item, idx }) => {
  const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link history-card" to={`/videopage/${item.id}`}>
        <ReactPlayer url={item.url} width="90%" height="55%" />
        <div className="history-card-content">
          {item.name}
          <Link className="link history-card-delete-btn" to="/history">
            <div
              onClick={() =>
                dispatch({ type: "DELETE_FROM_HISTORY", index: idx })
              }
            >
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
