import "./navbar.scss"
import SearchOutlineIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlineIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlineIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlineIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlineIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search.." />
                    <SearchOutlineIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlineIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlineIcon className="icon"/>                    
                    </div>
                    <div className="item">
                        <FullscreenExitOutlineIcon className="icon"/>                    
                    </div>
                    <div className="item">
                        <NotificationsOutlineIcon className="icon"/>    
                        <div className="counter">1</div>                
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlineIcon className="icon"/>
                        <div className="counter">2</div>                
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>                    
                    </div>
                    <div className="item">
                        <img src="https://th.bing.com/th/id/OIP.mEma0ZcipymPAHIYoIuFiAHaJa?pid=ImgDet&rs=1" className="avatar" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar