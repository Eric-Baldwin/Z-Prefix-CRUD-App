import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import SignInSide from './components/SignInSide';

function Home() {
    return <h2>Home</h2>;
}

function Inventory() {
    return <h2>Inventory</h2>;
}

function ItemDetails() {
    return <h2>Item Details</h2>;
}

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/item-details">Item Details</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/item-details" element={<ItemDetails />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInSide />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
