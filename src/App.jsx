import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import AddBook from "./components/addBook/addBook.jsx";
import Notfound from "./components/notfound/notfound.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {<Route path="/add" element={<AddBook />}></Route>}
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
