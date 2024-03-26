import Header from "./components/Header";
import "./App.scss"
import MainPage from "./components/MainPage";
import Pricing from "./components/Pricing";
function App() {
    return (
        <div className="app d-flex flex-column justify-content-center">
            <Header/>
            <div className="containers__gap d-grid ">
                <MainPage/>
                <Pricing/>
            </div>
        </div>
    );
}

export default App;
