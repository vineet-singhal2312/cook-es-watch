// import { Data } from "../data/Data";
import { VideoListCard } from "../cards/VideoListCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const VideoList = () => {
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/videos");

        setInitialData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(initialData);
  return (
    <>
      <div className="product-list">
        {initialData.map((item) => (
          <VideoListCard item={item} />
        ))}
      </div>
    </>
  );
};
