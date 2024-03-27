import Header from "./components/Header";
import "./App.scss"
import MainPage from "./components/MainPage";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Questions from "./components/Questions";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
    return (
        <div className="app d-flex flex-column justify-content-center">
            <Header/>
            <div className="containers__gap d-grid ">
                <MainPage/>
                <Pricing/>
                <Review/>
                <Questions/>
                <Blog/>
                <div className="footerDisplay">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
