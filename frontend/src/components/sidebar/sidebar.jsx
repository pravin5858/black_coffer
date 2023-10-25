import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">black-coffer</span>
            </div>
            <hr />
            <div className="center">
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </div>
            <div className="bottom">Color option</div>
            
        </div>
    )
}

export default Sidebar