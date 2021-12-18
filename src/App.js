import { Container } from "@mui/material";
import CovidIntroduction from "./components/CovidIntroduction";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <Container style={{ margin: 0, maxWidth: "100%", padding: 0}} fixed>
      <div style={{ paddingLeft: "20vw", paddingRight: "20vw", backgroundColor: "#4a4aff"}}>
        <div>
          <Header />
          <CovidIntroduction />
        </div>
        </div>
      <div style={{ paddingLeft: "20vw", paddingRight: "20vw"}}>
        <Dashboard />
      </div>  
    </Container>
  );

}

export default App;
