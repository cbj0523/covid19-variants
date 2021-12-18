import "./CovidIntroduction.css";
import { ReactComponent as COVID19 } from "../assets/covid19.svg"

const CovidIntroduction = () => {
    return (
        <div style={{ display:"flex", justifyContent: "space-around", paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
            <div style={{ marginTop: "2vw"}}>
                <h1 style={{ color: "white", fontSize: "2vw", marginBottom: "16px"}}>코로나바이러스감염증</h1>
                <h1 style={{ color: "white", fontSize: "2vw", marginBottom: "16px"}}>COVID-19 (SARS-CoV-2)</h1>
                <p className="covidIntroduction">
                현재 WTO 지정 범유행전염병(Pandemic)으로 분류되고, 
                </p>
                <p className="covidIntroduction">
                질병관리청에서 4단계 경보를 발령한 전염병  
                </p>   
                <p className="covidIntroduction">
                2019년 11월 17일 중국 우한시에서 최초로 보고되었으며
                </p>   
                <p className="covidIntroduction">
                지금까지 전 세계인들에게 가장 큰 영향을 끼친
                </p>   
                <p className="covidIntroduction">
                바이러스 중 하나이다.
                </p> 
                <p className="covidIntroduction">
                화이자, 모더나, 얀센, 아스트라제네카 등의 백신이 개발되고 있지만
                </p> 
                <p className="covidIntroduction">
                베타, 델타, 오미크론 등 백신 돌파 변이와 전염성을 증가시키는 변이가 등장하며
                </p>   
                <p className="covidIntroduction">
                원래의 일상생활로 회복할 수 있을지는 미지수이다.
                </p>   
            </div>
            <COVID19 style={{ width: "24vw", height: "24vw"}} />
        </div>
    )
}

export default CovidIntroduction;