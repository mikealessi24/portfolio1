import Header from "../src/Components/Header";
import About from "../src/Components/About";
import MyWork from "../src/Components/MyWork";
import ContactMe from "../src/Components/ContactMe";
import Nav from "../src/Components/Nav";
import Skills from "../src/Components/Skills";
import Logo from "../src/Components/Logo";
import "../src/style/app.css";

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Logo />
        <Nav />
      </div>
      <div className="app-right-outer">
        <div className="app-right">
          <Header />
          <Skills />
          <About />
          <MyWork />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
