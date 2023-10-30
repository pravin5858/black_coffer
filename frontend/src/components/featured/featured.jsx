import { CircularProgressbar } from "@mui/material";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import "react-circular-progressbar/dist/style.css";

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featureChaart">
            <CircularProgress variant="determinate" value={100} />
            </div>
            <p className="title">TotalSales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}
export default Featured;