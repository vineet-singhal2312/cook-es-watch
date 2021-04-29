import { MdDelete } from "react-icons/md";
// import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";

export const PlaylistVideoCard = ({ item }) => {
  // const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link playlist-videos-card" to={`/videopage/${item._id}`}>
        {/* <ReactPlayer url={item.url} width="90%" height="55%" /> */}
        <img src={item.img} className="playlist-card-img" alt="img" />

        <div className="playlist-videos-card-content">
          <p>{item.name}</p>
          <Link className="link playlist-videos-card-delete-btn" to="/playlist">
            <div
            //   onClick={() =>
            //     dispatch({
            //       type: "UNLIKED",
            //       payload: item,
            //     })
            //   }
            >
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
