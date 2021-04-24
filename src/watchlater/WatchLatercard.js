import ReactPlayer from "react-player";
import { MdDelete } from "react-icons/md";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";

export const WatchLaterCard = ({ item }) => {
  const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link watchlater-card" to={`/videopage/${item.id}`}>
        {/* <ReactPlayer url={item.url} width="90%" height="55%" /> */}
        <img src={item.img} className="watchlater-card-img" />

        <div className="watchlater-card-content">
          {item.name}

          <Link className="link watchlater-card-delete-btn" to="/watchlater">
            <div
              onClick={() =>
                dispatch({
                  type: "DELETE_FROM_WATCHLATER",
                  payload: item,
                })
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
