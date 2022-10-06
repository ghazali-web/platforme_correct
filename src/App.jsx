import "./App.css";
import {AboutUs,
  SharedCompany,
  Sidebar,
  Navbar,
  ElearningImages,
  StartLearning,
} from "./components";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Sidebar />
      <main className="Wrapper">
        <div className="align-row">
          <StartLearning />
          <ElearningImages />
        <div>
          <SharedCompany />
        </div>
        </div>
        <div>
          <AboutUs />
        </div>
      </main>
    </div>
  );
}
export default App;
