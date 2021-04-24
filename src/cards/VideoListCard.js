import axios from "axios";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { useReduce } from "../providers/useReducerProvider";

export const VideoListCard = ({ item }) => {
  const { dispatch, state } = useReduce();
  // console.log(state);
  const postVideoInHistory = async (id) => {
    console.log(id);

    try {
      await axios.post("/historyvideos", { Id: id });

      // const res1 = await axios.get("/historyvideos");

      // console.log(res1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link className="link" to={`/videopage/${item._id}`}>
        <div
          className="product-list-card"
          onClick={() => {
            console.log(item._id);
            postVideoInHistory(item._id);
          }}
          // onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: item })}
        >
          <img src={item.img} className="video-list-videoplayer" />
          {/* <ReactPlayer
            className="video-list-videoplayer"
            width="90%"
            height="55%"
            url={item.url}
          /> */}
          <div className="product-list-card-content">
            <h4 className="product-list-card-name">{item.name}</h4>
            <div className="product-list-card-views-div">
              <p>{item.views}</p>
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
