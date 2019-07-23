import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">My Travels</h1>
                </header>
                <Travel
                    country="Mauritius Island"
                    destination="Grand Baie"
                    photo="https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    distance={"9 298 km"}
                />
                <Travel
                    country="Greece"
                    destination="Athens"
                    photo="https://images.unsplash.com/photo-1540394748912-578b3d2250d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                    distance={"2 156 km"}
                />
            </div>
        );
    }
}

export default App;