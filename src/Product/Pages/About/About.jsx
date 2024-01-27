import React from 'react';
import './About.css'; // Import local styles

const About = () => {
  return (
    <div className="container mt-5" >
    <h1 className="text-center mb-4" style={{ color: 'black', fontSize: '40px', fontWeight: '600' ,fontFamily:"sans-serif"}}>
    Project Documentation
</h1>
      <section id="overview ">
        < h2 style={{ color: 'blck', fontSize: '40px', fontWeight: '600' }}> Overview</h2>
        <p style={{color:"black", fontFamily:"sans-serif",fontWeight:"600"}}>This document provides comprehensive documentation for the Certified organic Products React application.</p>
      </section>

      <section id="table-of-contents">
        <h2  >Table of Contents</h2>
        <ol>
          <li><a href="#folder-structure">Folder Structure</a></li>
          <li><a href="#components">Components</a>
            <ul>
              <li><a href="#login">Login</a></li>
            </ul>
          </li>
          <li><a href="#pages">Pages</a>
            <ul>
              <li><a href="#product">Product</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </li>
          <li><a href="#styles">Styles</a></li>
          <li><a href="#main-entry-points">Main Entry Points</a>
            <ul>
              <li><a href="#appjs">App.js</a></li>
              <li><a href="#indexjs">index.js</a></li>
            </ul>
          </li>
          <li><a href="#global-styles">Global Styles</a></li>
        </ol>
      </section>

      <section id="folder-structure">
        <h2>Folder Structure</h2>
        <pre>
          /src <br/>
          |-- /Product <br/>
          |   |-- Login <br/>
          |   |-- |--Login.jsx   <br/> 
          |   |-- |--Login.css   <br/>   
            {/* Product page functionality */}<br />
          |-- /pages<br/>
          |   |-- About<br/>
          |   |   |-- About.jsx<br/>
          |   |   |-- About.css<br/>
          |   |-- Product<br/>
              {/* About page functionality */}<br />
          |-- /styles<br/>
          |   |-- global.css  <br/>    {/* Global styles */}<br />
          |-- /...
        </pre>
      </section>

    </div>
  );
};

export default About;