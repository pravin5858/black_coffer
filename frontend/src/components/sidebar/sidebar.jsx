import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">black-coffer</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                    <GridViewIcon />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <SupervisedUserCircleIcon  />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon />
                        <span>Products</span>
                    </li>
                    <li>
                        <DvrIcon />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <QueryStatsIcon />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon />
                        <span>System Health</span>
                    </li>
                    <li>
                        <VpnKeyIcon />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AssignmentIndIcon />
                        <span>Profiles</span>
                    </li>
                    <li>
                        <LogoutIcon />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">Color option</div>
            
        </div>
    )
}

export default Sidebar