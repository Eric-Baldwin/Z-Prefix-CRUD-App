import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Inventory from './components/Inventory';
import ItemDetails from './components/ItemDetails';
import SignUp from './components/SignUp';
import NewGame from './components/NewGame';
import InventoryMgmt from './components/InventoryMgmt';
import ItemDetailsMgmt from './components/ItemDetailsMgmt';
import HomeMgmt from './components/HomeMgmt';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/inventory-mgmt" element={<InventoryMgmt />} />
                    <Route path="/inventory/item-details/:id" element={<ItemDetails />} />
                    <Route path="/inventory/item-details-mgmt/:id" element={<ItemDetailsMgmt />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Mgmt" element={<HomeMgmt />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/new-game" element={<NewGame />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
