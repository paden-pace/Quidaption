





import React, { Component } from "react";
import helpers from "./../utilities/helpers"



const GameContainer = React.createClass({
    getInitialState: function(){
            // helpers.getTournaments().then(function(response){
            //     console.log("response");
            //     console.log(response);
            //     if (response !== this.state.tournaments) {
            //         console.log("Tournaments", response.data);
            //         this.setState({ tournaments: response.data });
            //     }
            // });
        return {}
    },
            
    render: function(){
        return (
        <div className="game-container">
            <div className="row">
                <h2 className="page-header"> Team Set-up</h2>
            </div>
            <div className="row">
                <h4 className="active">Press the button bellow to switch to our Major League Quidditch game format.</h4>
                <button> <a href="/gameMLQ"> Switch </a></button>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                </div>
                <div className="col col-lg-10">
                    <form method="post" action="">
                        <div className="row">
                            <div className="form-group">
                                <label>Home Team</label>
                                <input type="text" className="form-control" name="homeName" id="home-name-input" placeholder="Home Team" />
                            </div>
                            <div className="form-group">
                                <label className="color-label" id="home-color-label">Home Color:</label>
                                <select id="home-color-input" className="home-color-input form-control">
                                    <option className="option-red">Red</option>
                                    <option className="option-orange">Orange</option>
                                    <option className="option-yellow">Yellow</option>
                                    <option className="option-green">Green</option>
                                    <option className="option-blue">Blue</option>
                                    <option className="option-purple">Purple</option>
                                    <option className="option-white">White</option>
                                    <option className="option-gray">Gray</option>
                                    <option className="option-black">Black</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Away Team</label>
                                <input type="text" id="away-name-input" className="form-control" name="awayName" placeholder="Away Team" />
                            </div>
                            <div className="form-group">
                                <label className="color-label" id="away-color-label">Away Color:</label>
                                <select id="away-color-input" className="away-color-input form-control">
                                    <option className="option-red">Red</option>
                                    <option className="option-orange">Orange</option>
                                    <option className="option-yellow">Yellow</option>
                                    <option className="option-green">Green</option>
                                    <option className="option-blue">Blue</option>
                                    <option className="option-purple">Purple</option>
                                    <option className="option-white">White</option>
                                    <option className="option-gray">Gray</option>
                                    <option className="option-black">Black</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Seeker Floor</label>
                                <input type="number" id="seeker-floor-input" className="form-control" name="seekerFloor" placeholder="18" />
                                <p> Minutes</p>
                            </div>
                        </div>
                        <button type="submit" id="submitTeams" className="btn btn-default">Submit</button>
                    </form>
                </div>
                <div className="col col-lg-2">
                </div>
            </div>
        </div>
        );
    }
});

// Exporting our Panel component
export default GameContainer;
