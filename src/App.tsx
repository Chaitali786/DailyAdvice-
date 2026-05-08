import "./App.css";
import Header from "./components/Header";
import AdviceDetailsGenerator from "./components/AdviceDetailsGenerator";

function App() {
  return (
    <>
      <div  className="min-h-screen bg-[linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('/bgimg.jpg')]  bg-cover bg-white/40 bg-center bg-no-repeat bg-fixed opacity-150">
        <Header />
      
        <AdviceDetailsGenerator />
      </div>
     
    </>
  );
}

export default App;
