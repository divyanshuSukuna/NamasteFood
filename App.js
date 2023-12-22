import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header/>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
