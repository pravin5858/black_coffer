import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";

import "./home.scss";
 

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar /> 
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>                               
            </div>
        </div>
    )
}
export default Home