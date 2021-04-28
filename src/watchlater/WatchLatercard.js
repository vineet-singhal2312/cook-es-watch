import { MdDelete } from "react-icons/md";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";
import axios from "axios";

export const WatchLaterCard = ({ item }) => {
  const { dispatch } = useReduce();

  console.log(item);

  const deletefromWatchLater = async (item) => {
    try {
      const { data } = await axios.delete("/watchlatervideos", {
        data: {
          watchlatervideo_id: item._id,
          video_id: item.id._id,
        },
      });
      dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <Link className="link watchlater-card" to={`/videopage/${item.id._id}`}>
        {/* <ReactPlayer url={item.url} width="90%" height="55%" /> */}
        <img src={item.id.img} className="watchlater-card-img" alt="img" />

        <div className="watchlater-card-content">
          {item.id.name}

          <Link className="link watchlater-card-delete-btn" to="/watchlater">
            <div
              // onClick={() =>
              //   dispatch({
              //     type: "DELETE_FROM_WATCHLATER",
              //     payload: item,
              //   })
              // }

              onClick={() => deletefromWatchLater(item)}
            >
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
