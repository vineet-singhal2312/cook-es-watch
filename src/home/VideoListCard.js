import axios from "axios";
import { Link } from "react-router-dom";

export const VideoListCard = ({ item }) => {
  // const { dispatch, state } = useReduce();
  // console.log(item);
  const postVideoInHistory = async (id) => {
    // console.log(id);
    try {
      await axios.post("https://cook-es-watch.herokuapp.com/historyvideos", { Id: id });
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
          <img src={item.img} className="video-list-videoplayer" alt="img" />

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
