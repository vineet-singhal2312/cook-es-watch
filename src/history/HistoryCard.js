import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";

export const HistoryCard = ({ item }) => {
  const { setHistoryData } = useHistory();

  const deleteHistoryVideo = async (_id) => {
    try {
      const { data } = await axios.delete(
        "https://cook-es-watch.herokuapp.com/historyvideos",
        {
          data: { historyVideo_id: _id },
        }
      );

      setHistoryData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Link className="link history-card" to={`/videos/${item.id._id}`}>
        <img src={item.id.img} className="history-card-img" alt="img" />

        <div className="history-card-content">
          {item.id.name}
          <Link className="link history-card-delete-btn" to="/history">
            <div onClick={() => deleteHistoryVideo(item._id)}>
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
