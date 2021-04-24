import axios from "axios";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { useReduce } from "../providers/useReducerProvider";

export const VideoListCard = ({ item }) => {
  const { dispatch, state } = useReduce();
  const postVideoInHistory = async (id) => {
    // console.log(id);
    try {
      const res1 = await axios.post("/historyvideos", { Id: id });

      console.log(res1);
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
            postVideoInHistory(item._id);
          }}
        >
          <img src={item.img} className="video-list-videoplayer" />

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
