import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "../../providers/HistoryContextProvider";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";

export const HistoryCard = ({ item }) => {
  const { setHistoryData } = useHistory();
  const { token } = useAuth();

  const deleteHistoryVideo = async (_id) => {
    try {
      const data = await ApiService(
        "delete",
        {
          headers: { authorization: token },

          data: { historyVideo_id: _id },
        },
        "historyvideos"
      );

      console.log(data.result[0].videos);
      setHistoryData(data.result[0].videos);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(item);

  return (
    <>
      {" "}
      <Link className="link history-card" to={`/videos/${item._id}`}>
        <img src={item.img} className="history-card-img" alt="img" />

        <div className="history-card-content">
          {item.name}
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
