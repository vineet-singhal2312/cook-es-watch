import { HistoryCard } from "./HistoryCard";
import { Header } from "../../components/Header";
import { SideNav } from "../../components/SideNav";
import { useReduce } from "../../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";
import { useLoader } from "../home/LoaderContextProvider";
import { Loader } from "../../components/Loader";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";
export const History = () => {
  const { dispatch, setIsSideNav } = useReduce();
  const { setHistoryData, historyData } = useHistory();
  const { isLoader, setIsLoader } = useLoader();
  const { token } = useAuth();
  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const data = await ApiService(
          "get",
          { headers: { authorization: token } },
          "historyvideos"
        );

        setHistoryData(data[0].videos);
        setIsLoader(false);
      } catch (error) {
        console.log(error, "axios error");
      }
    })();
  }, [setHistoryData, setIsLoader]);

  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };

  console.log(historyData);
  return (
    <>
      <Header />
      <SideNav />

      {historyData.length === 0 ? (
        <div className="history-main">
          {" "}
          <h1>You haven't chechout any videos yet... </h1>
        </div>
      ) : (
        <div className="history-main" onClick={() => closeSideNav()}>
          <h2 className="page-heading-history">HISTORY</h2>
          <button
            className="history-clear-btn"
            onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
          >
            Clear All
          </button>
          {isLoader ? (
            <Loader />
          ) : (
            <div className="history-video-list">
              {historyData.map((item) => (
                <HistoryCard key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
