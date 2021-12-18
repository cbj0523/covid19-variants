import { FaVirus } from "react-icons/fa"

const Header = () => {
    return (
        <header style={{ paddingTop: "1vw", marginBottom: "2vw", maxWidth: "600px"}}>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", paddingLeft: "20px"}}>
                <FaVirus color="white" size={64} style={{ marginRight: "20px"}} />
                <h2 style={{ color: "white", fontSize: 24}}>COVID-19 (SARS-CoV-2) Variants</h2>
            </div>
        </header>
    )
}

export default Header;