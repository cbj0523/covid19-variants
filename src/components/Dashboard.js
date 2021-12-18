import "./Dashboard.css";
import { BiWorld } from "react-icons/bi";
import { GiSouthKorea } from "react-icons/gi"
import { RiSyringeFill, RiSyringeLine } from "react-icons/ri";

const Dashboard = () => {
    return (
        <div className="dashboardContainer">
            <div className="cardContainer">
                <BiWorld color="#00a33c" size="2vw" />
                <div className="cardText">
                    <h2>World</h2>
                    <h3>2.7억</h3>
                </div>
            </div>
            <div className="cardContainer">
                <GiSouthKorea color="#00f224" size="2vw" />
                <div className="cardText">
                    <h2>Domestic</h2>
                    <h3>55.9만</h3>
                </div>
            </div>
            <div className="cardContainer">
                <RiSyringeLine color="#00aef2" size="2vw" />
                <div className="cardText">
                    <h2>1차 백신접종</h2>
                    <h3>84.5%</h3>
                </div>
            </div>
            <div className="cardContainer">
                <RiSyringeFill color="#00aef2" size="2vw" />
                <div className="cardText">
                    <h2>접종완료</h2>
                    <h3>81.8%</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;