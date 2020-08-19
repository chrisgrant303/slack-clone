import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1>Hello Chris, let's build a slack clone 🚀 </h1>

      <Header />
      <div className="app_body">
        <Sidebar />
        {/* React Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
