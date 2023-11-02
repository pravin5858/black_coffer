
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


export const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featureChart">
            <CircularProgressbar value={57} className="circle" text={"57%"}/>
            <p className="title">Total sales of today</p>
            <p className="amount">$111</p>
            <p className="desc">
                Previous transaction is Failed processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">
                            $21.2
                           </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">
                            $1.2
                           </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">
                            $21.2
                           </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Featured;