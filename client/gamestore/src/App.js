import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import SignInSide from './components/SignInSide';
import Home from './components/Home';
import Inventory from './components/Inventory';
import ItemDetails from './components/ItemDetails';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/inventory/item-details/:id" element={<ItemDetails />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignInSide />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
