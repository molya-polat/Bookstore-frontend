
import React from "react";
import photo3 from "../assets/photo3.png";


export class Roof extends React.Component {
    render = () => {
        return (
            <div id="roof">
                <div id="photo3-left">
                    <img id="img1" src={photo3} alt="photo3"/>
                </div>
                <div id="name">
                    <h1 className="MainName">BookLand</h1>
                </div>
                <div id="photo3-right">
                    <img id="img2" src={photo3} alt="photo3"/>
                </div>
            </div>
        );
    };
}