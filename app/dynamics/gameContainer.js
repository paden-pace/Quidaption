





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
            <div class="row">
                <h2 class="page-header"> Team Set-up</h2>
            </div>
            <div class="row">
                <h4 class="active">Press the button bellow to switch to our Major League Quidditch game format.</h4>
                <button> <a href="/gameMLQ"> Switch </a></button>
            </div>
            <div class="row">
                <div class="col col-lg-2">
                </div>
                <div class="col col-lg-10">
                    <form method="post" action="">
                        <div class="row">
                            <div class="form-group">
                                <label>Home Team</label>
                                <input type="text" class="form-control" name="homeName" id="home-name-input" placeholder="Home Team" />
                            </div>
                            <div class="form-group">
                                <label class="color-label" id="home-color-label">Home Color:</label>
                                <select id="home-color-input" class="home-color-input form-control">
                                    <option class="option-red">Red</option>
                                    <option class="option-orange">Orange</option>
                                    <option class="option-yellow">Yellow</option>
                                    <option class="option-green">Green</option>
                                    <option class="option-blue">Blue</option>
                                    <option class="option-purple">Purple</option>
                                    <option class="option-white">White</option>
                                    <option class="option-gray">Gray</option>
                                    <option class="option-black">Black</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label>Away Team</label>
                                <input type="text" id="away-name-input" class="form-control" name="awayName" placeholder="Away Team" />
                            </div>
                            <div class="form-group">
                                <label class="color-label" id="away-color-label">Away Color:</label>
                                <select id="away-color-input" class="away-color-input form-control">
                                    <option class="option-red">Red</option>
                                    <option class="option-orange">Orange</option>
                                    <option class="option-yellow">Yellow</option>
                                    <option class="option-green">Green</option>
                                    <option class="option-blue">Blue</option>
                                    <option class="option-purple">Purple</option>
                                    <option class="option-white">White</option>
                                    <option class="option-gray">Gray</option>
                                    <option class="option-black">Black</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label>Seeker Floor</label>
                                <input type="number" id="seeker-floor-input" class="form-control" name="seekerFloor" placeholder="18" />
                                <p> Minutes</p>
                            </div>
                        </div>
                        <button type="submit" id="submitTeams" class="btn btn-default">Submit</button>
                    </form>
                </div>
                <div class="col col-lg-2">
                </div>
            </div>
        </div>
        );
    }
});

// Exporting our Panel component
export default GameContainer;
