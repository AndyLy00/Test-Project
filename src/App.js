import Header from "./components/Header";
import "./App.scss"
import MainPage from "./components/MainPage";
function App() {
    return (
        <div className="app d-flex flex-column justify-content-center">
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
