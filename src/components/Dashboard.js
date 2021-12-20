import "./Dashboard.css";
import { BiWorld } from "react-icons/bi";
import { GiSouthKorea } from "react-icons/gi"
import { RiSyringeFill, RiSyringeLine } from "react-icons/ri";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
const axios = require("axios");

const Dashboard = (props) => {

    const [totalCase, setTotalCase] = useState(0);
    const [newCase, setnewCase] = useState(0);

    // const [totalCase, setTotalCase] = useState(0);
    // const [totalCase, setTotalCase] = useState(0);

    const getCurrentState = () => {
        axios.get("https://api.corona-19.kr/korea/?serviceKey=U3KqLAitkIpu6GBwe4locjsYzXWg5yP7Z").then(
        (res) => {
            console.log(res.data.TotalCase);
            setTotalCase(res.data.TotalCase);
            setnewCase(res.data.TotalCaseBefore);
            }
        )
    }

    useEffect(() => {
        getCurrentState();
    })

    return (
        <div className="dashboardContainer">
            <div className="cardContainer">
                <BiWorld color="#00a33c" size="2vw" />
                <div className="cardText">
                    <h2>World</h2>
                    <h3><CountUp decimals={1} start={0} end={2.7} duration={1} />억</h3>
                </div>
            </div>
            <div className="cardContainer">
                <GiSouthKorea color="#00f224" size="2vw" />
                <div className="cardText">
                    <h2>Domestic</h2>
                    <h3><CountUp delay={0.2} decimals={1} start={0} end={totalCase} duration={1} /></h3>
                </div>
            </div>
            <div className="cardContainer">
                <RiSyringeLine color="#00aef2" size="2vw" />
                <div className="cardText">
                    <h2>1차 백신접종</h2>
                    <h3><CountUp delay={0.4} decimals={1} start={0} end={84.7} duration={1} />%</h3>
                </div>
            </div>
            <div className="cardContainer">
                <RiSyringeFill color="#00aef2" size="2vw" />
                <div className="cardText">
                    <h2>접종완료</h2>
                    <h3><CountUp delay={0.6} decimals={1} start={0} end={81.8} duration={1} />%</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;