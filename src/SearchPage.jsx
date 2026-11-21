import { useParams } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { searchChannel, searchVideos } from "./data";
import "./SearchPage.css";

function SearchPage() {
  const { searchTerm } = useParams();

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <p className="searchPage__term">Results for “{searchTerm}”</p>
      <hr />

      <ChannelRow {...searchChannel} />
      <hr />

      {searchVideos.map(({ id, ...video }) => (
        <VideoRow key={id} {...video} />
      ))}
    </div>
  );
}

export default SearchPage;
