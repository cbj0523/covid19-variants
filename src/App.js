import { Container } from "@mui/material";
import CovidIntroduction from "./components/CovidIntroduction";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import VariantCard from "./components/VariantCard";
import { ReactComponent as Alpha } from "./assets/alpha.svg";
import { ReactComponent as Beta } from "./assets/beta.svg";
import { ReactComponent as Delta } from "./assets/delta.svg";
import { ReactComponent as Gamma } from "./assets/gamma.svg";
import { ReactComponent as Omicron } from "./assets/omicron.svg";
import VariantDATA from "./assets/variant";

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
      <div style={{ marginTop: "2vw", paddingLeft: "10vw", paddingRight: "10vw"}}>
        <hr />
        <VariantCard imgComponent={Alpha} variantName="Alpha" variantInformation={VariantDATA.alpha} />
        <VariantCard imgComponent={Beta} variantName="Beta" variantInformation={VariantDATA.beta} />
        <VariantCard imgComponent={Gamma} variantName="Gamma" variantInformation={VariantDATA.gamma}  />
        <VariantCard imgComponent={Delta} variantName="Delta" variantInformation={VariantDATA.delta} />
        <VariantCard imgComponent={Omicron} variantName="Omicron" variantInformation={VariantDATA.omicron} />
      </div>
      <footer style={{ textAlign: "center", marginTop: "1vw", marginBottom: "1vw"}}>
        <p>이 홈페이지의 저작권은 2021 상당고등학교 1학년 3반 최병준(github.com/cbj0523) 에게 있습니다.</p>
        <p>Copyright (C) 2021 최병준 all rights reserved.</p>
      </footer>
    </Container>
  );

}

export default App;
