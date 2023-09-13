import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Inventory from './components/Inventory';
import ItemDetails from './components/ItemDetails';
import SignUp from './components/SignUp';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/inventory/item-details/:id" element={<ItemDetails />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
