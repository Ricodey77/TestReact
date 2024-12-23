import Footer from "./components/Footer";
import LeftSection from "./components/LeftSection";
import Logo from "./components/Navbar/Logo";
import Buttons from "./components/Navbar/Buttons";
import RightSection from "./components/rightSection";
import Middle from "./components/midSection";
import config from "./config/config.json";
import "./App.css";

function App() {
  const navComp= [
    { name: "Logo", component: <Logo />, position: config.Logo.position, visibility: config.Logo.visibility },
    { name: "Buttons", component: <Buttons />, position: config.Buttons.position, visibility: config.Buttons.visibility },
    
  ];
  const mainComp= [
    { name: "LeftC", component: <LeftSection />, position: config.LeftC.position, visibility: config.LeftC.visibility },
    { name: "RightC", component: <RightSection />, position: config.RightC.position, visibility: config.RightC.visibility },
    
  ];

  const midComp= [
    { name: "MidC", component: <Middle />, visibility: config.MidC.visibility },
    
  ];

  const footerComp= [
    { name: "Footer", component: <Footer />, visibility: config.Footer.visibility },
    
  ];


    // Filter and sort components based on visibility and position
    const visNavComp = navComp
    .filter((comp) => comp.visibility) // Only include visible components
    .sort((a, b) => (a.position > b.position ? 1 : -1)); // Sort by position

    const visMainComp = mainComp
    .filter((comp) => comp.visibility) // Only include visible components
    .sort((a, b) => (a.position > b.position ? 1 : -1)); // Sort by position

    const visMidComp = midComp
    .filter((comp) => comp.visibility) // Only include visible components

    const visFooterComp = footerComp
    .filter((comp) => comp.visibility) // Only include visible components

  return (
    <>
      <div className="navbar">
        <div
          className="d-flex justify-content-between  sticky-top rounded-3 bg-body-tertiary"
          data-bs-theme="dark"
          style={{ width: "95%", "boxOutline": "0px 0px 5px #fff", 'outlineStyle': 'outset' }}
        >
        {visNavComp.map((comp) => (
          <div key={comp.name} className={comp.name}>
            {comp.component}
          </div>
        ))}
        </div>
      </div>

      <div className="MainC ">

      {visMainComp.map((comp) => (
          <div key={comp.name} className={comp.name}>
            {comp.component}
          </div>
        ))}
        {/* <div className="LeftC">
          <LeftSection />
        </div>
        <div className="RightC">
          <RightSection />
        </div> */}
      </div>

      {visMidComp.map((comp) => (
          <div key={comp.name} className={comp.name}>
            {comp.component}
          </div>
        ))}

{visFooterComp.map((comp) => (
          <div key={comp.name} className={comp.name}>
            {comp.component}
          </div>
        ))}
    </>
  );
}

export default App;
