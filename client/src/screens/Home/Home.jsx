import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="welcome-container">
                <h1>Hi, I'm <span>Salman Ansari</span></h1>
                <h2>I'm a Software Engineer / Full-Stack Developer</h2>
                <p>Front End Developer / Back End Developer / WordPress</p>
                <br />
                <br />
                <button>View Projects</button>
            </div>
        );
    }
}

export default Home;