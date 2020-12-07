import Header from "../src/Components/Header";
import About from "../src/Components/About";
import MyWork from "../src/Components/MyWork";
import ContactMe from "../src/Components/ContactMe";
import Nav from "../src/Components/Nav";
import Skills from "../src/Components/Skills";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
