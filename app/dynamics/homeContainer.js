





import React, { Component } from "react";
import helpers from "./../utilities/helpers"



const HomeContainer = React.createClass({
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
        <div className="home-container">
            <div className="home-title">
                <h1>- Quidaption -</h1>
            </div>

            <hr />
            
            <div className="row all-options">
                <div className="col-lg-12 all-options">
                    <div className="row options-row">
                        <h2 className="home-sub">See what all Quidaption has to offer</h2>
                        <hr className="hr-sub" />
                    </div>

                    <div className="row options-row">
                        <div className="options-col col-md-6">
                            <div className="options-image">
                                <img src="./img/sample.png" alt="Tournament Options" width="80%" className="options-img project-img-left" id="sample-options"/>
                            </div>
                        </div>
                        <div className="options-col col-md-6">
                            <div className="options-text">
                                <h3 className="options-title">- Profile Page -</h3>
                                <h4 className="options-par">Keep track of all the upcoming Quidditch tournaments 
                                    from across the country.</h4>
                                <h4 className="options-par">Save the tournaments that you plan to attend for 
                                    easy access later.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row options-row">
                        <div className="options-col col-md-6">
                            <div className="options-text">
                                <h3 className="options-title">- Team Page -</h3>
                                <h4 className="options-par">Keep track of all the upcoming Quidditch tournaments 
                                    from accross the country.</h4>
                                <h4 className="options-par">Save the tournaments that you plan to attend for 
                                    easy access later.</h4>
                            </div>
                        </div>
                        <div className="options-col col-md-6">
                            <div className="options-image">
                                <img src="./img/sample.png" alt="Tournament Options" width="80%" className="options-img project-img-left" id="sample-options"/>
                            </div>
                        </div>
                    </div>

                    <div className="row options-row">
                        <div className="options-col col-md-6">
                            <div className="options-image">
                                <img src="./img/sample.png" alt="Tournament Options" width="80%" className="options-img project-img-left" id="sample-options"/>
                            </div>
                        </div>
                        <div className="options-col col-md-6">
                            <div className="options-text">
                                <h3 className="options-title">- Tournaments -</h3>
                                <h4 className="options-par">Keep track of all the upcoming Quidditch tournaments 
                                    from accross the country.</h4>
                                <h4 className="options-par">Save the tournaments that you plan to attend for 
                                    easy access later.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row options-row">
                        <div className="options-col col-md-6">
                            <div className="options-text">
                                <h3 className="options-title">- Game Mode -</h3>
                                <h4 className="options-par">Keep track of all the upcoming Quidditch tournaments 
                                    from accross the country.</h4>
                                <h4 className="options-par">Save the tournaments that you plan to attend for 
                                    easy access later.</h4>
                            </div>
                        </div>
                        <div className="options-col col-md-6">
                            <div className="options-image">
                                <img src="./img/sample.png" alt="Tournament Options" width="80%" className="options-img project-img-left" id="sample-options"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
});

// Exporting our Panel component
export default HomeContainer;
