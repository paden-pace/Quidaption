





import React, { Component } from "react";
import helpers from "./../utilities/helpers"



const LinksContainer = React.createClass({
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
            <div className="all-links">

                <div className="row links-main-row">
                    <h1>Checkout some helpful Quidditch Related Links</h1>
                </div>

                <div className="row links-row">
                    <div className="links-col col-lg-12">
                        <h2 className="link-group">Official League Sites</h2>
                        <div className="row links-text">
                            <a href="https://www.usquidditch.org/" target="_blank">
                                <h3 className="links-title">United States Quidditch (USQ)</h3>
                            </a>
                            <a href="https://www.usquidditch.org/" target="_blank">
                                <h4 className="links-link">https://www.usquidditch.org/ </h4>
                            </a>
                            <h4 className="links-par">The official website of the United States Quidditch League</h4>
                        </div>
                        <div className="row links-text">
                            <a href="http://mlquidditch.com/" target="_blank">
                                <h3 className="links-title">Major League Quidditch (MLQ)</h3>
                            </a>
                            <a href="http://mlquidditch.com/" target="_blank">
                                <h4 className="links-link">http://mlquidditch.com/</h4>
                            </a>
                            <h4 className="links-par">The official website of Major League Quidditch</h4>
                        </div>
                        <div className="row links-text">
                            <a href="http://tslquidditch.com/" target="_blank">
                                <h3 className="links-title">Texas Secede League Quidditch (TSL)</h3>
                            </a>
                            <a href="http://tslquidditch.com/" target="_blank">
                                <h4 className="links-link">http://tslquidditch.com/</h4>
                            </a>
                            <h4 className="links-par">The official website of the Texas Secede League</h4>
                        </div>
                    </div>
                </div>

                <div className="row links-row">
                    <div className="links-col col-lg-12">
                        <h2 className="link-group">Common Quidditch Journalism Sites</h2>
                        <div className="row links-text">
                            <a href="http://www.eighthman.com/" target="_blank">
                                <h3 className="links-title">Eighth Man</h3>
                            </a>
                            <a href="http://www.eighthman.com/" target="_blank">
                                <h4 className="links-link">http://www.eighthman.com/</h4>
                            </a>
                            <h4 className="links-par">A popular journalism media dedicated to keep users up to date with quidditch events</h4>
                        </div>
                        <div className="row links-text">
                            <a href="http://quidditchpost.blogspot.com/" target="_blank">
                                <h3 className="links-title">The Quidditch Post</h3>
                            </a>
                            <a href="http://quidditchpost.blogspot.com/" target="_blank">
                                <h4 className="links-link">http://quidditchpost.blogspot.com/</h4>
                            </a>
                            <h4 className="links-par">A popular journalism media dedicated to keep users up to date with quidditch events </h4>
                        </div>
                    </div>
                </div>

                <div className="row links-row">
                    <div className="links-col col-lg-12">
                        <h2 className="link-group">Facebook Pages</h2>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/106732796325909/" target="_blank">
                                <h3 className="links-title">#MLQForumns</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/106732796325909/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/106732796325909/</h4>
                            </a>
                            <h4 className="links-par">the ULTIMATE SUMMER league circuit QUIDDITCH!</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/496052330475477/" target="_blank">
                                <h3 className="links-title">#IQAForumns</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/496052330475477/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/496052330475477/ </h4>
                            </a>
                            <h4 className="links-par">The purpose of this group is to be a place to discuss Quidditch gameplay and related matters.</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/324784184240679/" target="_blank">
                                <h3 className="links-title">USQ Southwest Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/324784184240679/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/324784184240679/</h4>
                            </a>
                            <h4 className="links-par">This is the official group of the USQ for the Southwest and your one stop for all things quidditch within the region. </h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/14332328691/" target="_blank">
                                <h3 className="links-title">USQ West Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/14332328691/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/14332328691/</h4>
                            </a>
                            <h4 className="links-par">A group for all member teams (and fans!) in the West Region of US Quidditch, incorporating these states: Arizona, California, Hawaii, Nevada, Utah</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/324123644314803/" target="_blank">
                                <h3 className="links-title">USQ South Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/324123644314803/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/324123644314803/</h4>
                            </a>
                            <h4 className="links-par">A facebook group for those interested in the USQ South Region</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/215693278535170/" target="_blank">
                                <h3 className="links-title">USQ Northwest Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/215693278535170/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/215693278535170/</h4>
                            </a>
                            <h4 className="links-par">This group is for the Northwestern Quidditch teams of America and Western Canada so we can keep in touch and organize together.</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/228169693932620/" target="_blank">
                                <h3 className="links-title">USQ Mid-Atlantic Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/228169693932620/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/228169693932620/</h4>
                            </a>
                            <h4 className="links-par">The USQ Mid-Atlantic region is comprised of New Jersey, Pennsylvania, Delaware, Maryland, Washington, D.C, Virginia, West Virginia, and North Carolina.</h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/272239859509045/" target="_blank">
                                <h3 className="links-title">USQ Northeast Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/272239859509045/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/272239859509045/</h4>
                            </a>
                            <h4 className="links-par">For those who either play on Northeast USQ teams, or support them, this is the group for you! You can promote your tournaments, set up scrimmages, talk quidditch, make friends and more! </h4>
                        </div>
                        <div className="row links-text">
                            <a href="https://www.facebook.com/groups/412594742223283/" target="_blank">
                                <h3 className="links-title">USQ Great Lakes Region</h3>
                            </a>
                            <a href="https://www.facebook.com/groups/412594742223283/" target="_blank">
                                <h4 className="links-link">https://www.facebook.com/groups/412594742223283/</h4>
                            </a>
                            <h4 className="links-par">This page is for players, teams, and fans of quidditch in the Great Lakes Region, which include: Ohio, Michigan, Indiana, Kentucky</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
});

// Exporting our Panel component
export default LinksContainer;
