import React from 'react';
import './App.css';
import Header from "./Header";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1>Hello Chris, let's build a slack clone 🚀 </h1>

      {/* Header */}
      <Header />
      {/* Sidebar */}
      {/* React Router -> Chat screen */}

    </div>
  );
}

export default App;
