import { MdDelete } from "react-icons/md";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";
import axios from "axios";

export const WatchLaterCard = ({ item }) => {
  const { dispatch } = useReduce();

  const deletefromWatchLater = async (item) => {
    try {
      const { data } = await axios.delete(
        "https://cook-es-watch.herokuapp.com/watchlatervideos",
        {
          data: {
            watchlatervideo_id: item._id,
            video_id: item.id._id,
          },
        }
      );
      dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <Link className="link watchlater-card" to={`/videos/${item.id._id}`}>
        <img src={item.id.img} className="watchlater-card-img" alt="img" />

        <div className="watchlater-card-content">
          {item.id.name}

          <Link className="link watchlater-card-delete-btn" to="/watchlater">
            <div onClick={() => deletefromWatchLater(item)}>
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
