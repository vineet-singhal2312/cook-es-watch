import { Data } from "../data/Data";
import { VideoListCard } from "../cards/VideoListCard";

export const VideoList = () => {
  return (
    <>
      <div className="product-list">
        {Data.map((item) => (
          <VideoListCard item={item} />
        ))}
      </div>
    </>
  );
};
