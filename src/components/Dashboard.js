import "./Dashboard.css";
import { GiDeathSkull } from "react-icons/gi";
import { GiSouthKorea } from "react-icons/gi"
import { RiSyringeFill, RiSyringeLine } from "react-icons/ri";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
const axios = require("axios");

const Dashboard = (props) => {

    const [totalCase, setTotalCase] = useState(0);
    const [newCase, setnewCase] = useState(0);

    const [deathCase, setDeathCase] = useState(0);
    const [deathPercentage, setDeathPercentage] = useState(0);

    const getTotalnNewState = () => {
        axios.get("https://api.corona-19.kr/korea/?serviceKey=U3KqLAitkIpu6GBwe4locjsYzXWg5yP7Z").then(
        (res) => {
            console.log(res.data);
            setTotalCase(parseInt(res.data.TotalCase.replace(",", "")));
            setnewCase(parseInt(res.data.TotalCaseBefore.replace(",", "")));
            setDeathCase(parseInt(res.data.TotalDeath.replace(",", "")));
            setDeathPercentage(res.data.deathPercentage);

            console.log(res.data.TotalDeath);
            console.log(res.data.deathPercentage);
            }
        )
    }

    const getVaccinated = () => {
        axios.get("https://nip.kdca.go.kr/irgd/cov19stats.do?list=all", { Headers: {
            "Access-Control-Allow-Origin": "*"
        } }).then( (res) => {
            console.log(res.data);
        });
    }

    useEffect(() => {
        getTotalnNewState();
        getVaccinated();
    })

    return (
        <div className="dashboardContainer">
            <div className="cardContainer">
                <GiSouthKorea color="#00f224" size="2vw" />
                <div className="cardText">
                    <h2>국내 확진자수</h2>
                    <h3><CountUp start={0} end={totalCase} duration={1} />명 (▲ <CountUp delay={0.2} start={0} end={newCase} duration={1} />)</h3>
                </div>
            </div>
            <div className="cardContainer">
                <GiDeathSkull color="#000000" size="2vw" />
                <div className="cardText">
                    <h2>국내 사망자수</h2>
                    <h3><CountUp delay={0.2} start={0} end={deathCase} duration={1} />명 (<CountUp delay={0.2} start={0} end={deathPercentage} duration={1} decimals={2} />%) </h3>
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