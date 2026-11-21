import VideoCard from "./VideoCard";
import { recommendedVideos } from "./data";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {recommendedVideos.map(({ id, ...video }) => (
          <VideoCard key={id} {...video} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
