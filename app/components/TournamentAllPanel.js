



import React, { Component } from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentIndividuals from "./TournamentIndividuals";
import helpers from "./../utilities/helpers"



const TournamentAllPanel = React.createClass({
  getInitialState: function(){
      return {
            tournaments: [
                {
                    name: "THE Fantasy Tournament",
                    date: "July 4, 2017",
                    league: "fantasy",
                    location: "Clark Field (1234 Sample St. Austin, Tx 78741)",
                    registeredTeams: [
                        {
                            name: "Texas Quidditch"
                        },
                        {
                            name: "Austin Quidditch"
                        }
                    ],
                    attendees: [
                        {
                            name: "Jim"
                        },
                        {
                            name: "Bobby"
                        }
                    ],
                    comments: [
                        {
                            user: "Jim",
                            body: "I went to this tourny last year and it was cool",
                        },
                        {
                            user: "Bobby",
                            body: "IDK this is sample text",
                        }
                    ]
                },
                {name: "Some Other Tournament",
                    date: "July 4, 2017",
                    league: "USQ",
                    location: "An undisclosed location",
                    registeredTeams: [
                        {
                            name: "Sample Quidditch Team"
                        },
                        {
                            name: "Another Quidditch Team"
                        }
                    ],
                    attendees: [
                        {
                            name: "Alan"
                        },
                        {
                            name: "Bobby"
                        }
                    ],
                    comments: [
                        {
                            user: "Alan",
                            body: "Blah, Blah, Blah",
                        },
                        {
                            user: "Bobby",
                            body: "Blee, Blee, Blee",
                        }
                    ]
                },
                {name: "Third Sample Tournament",
                    date: "April 13, 2018",
                    league: "MLQ",
                    location: "TBD",
                    registeredTeams: [
                        {
                            name: "Austin Outlaws"
                        },
                        {
                            name: "League City Legends"
                        }
                    ],
                    attendees: [
                        {
                            name: "Gary"
                        },
                        {
                            name: "LaFounda"
                        }
                    ],
                    comments: []
                }
            ],
        }
    },
    showAllTournaments: function(){
        console.log("showAllTournaments at least activated.");
        helpers.getTournaments().then(function(response){
            console.log("response");
            console.log(response);
            if (response !== this.state.tournaments) {
                console.log("Tournaments", response.data);
                this.setState({ tournaments: response.data });
            }
        }.bind(this));
    },
    render: function(){
        return (
        <div className="panel panel-default">
            <TournamentIndividuals data={this.state.tournaments}/>
            <button onClick={this.showAllTournaments}>
                ShowAll
            </button>
        </div>
        );
    }
});

// Exporting our Panel component
export default TournamentAllPanel;


// class TournamentAllOptions extends Component {
//   constructor() {
//     super();
//     // This component has an "open" state that's either true or false
//     this.state = {
//       open: false
//     };
//     // Binding these methods to our component otherwise their 'this'
//     // will change
//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
//   }
//   // This method will toggle this component's "open" state
//   toggleDropdown() {
//     this.setState({
//       open: !this.state.open
//     });
//   }
//   // This method calls the parent component's (Panel's) handleDropdownSelect method
//   handleDropdownSelect(option) {
//     this.props.handleSelect(option);
//     // Then it closes the dropdown
//     this.toggleDropdown();
//   }
//   // renderList returns one li tag for each option prop we're passed
//   // Using option.value ("SHOW_CAT", "SHOW_LOREM", etc)
//   // If we were dynamically adding and removing these li tags, we'd worry about
//   // using a uuid. No chance of name collisions here.
//   renderList() {
//     return this.props.options.map(option => (
//       <li
//         onClick={() => this.handleDropdownSelect(option)}
//         key={option.value}
//       >
//         <a>{option.text}</a>
//       </li>
//     ));
//   }
//   // If our component's open state is true, give the dropdown div a class of "open"
//   // otherwise the "open" class is removed. This lets us toggle our dropdown open and
//   // closed without jQuery
//   render() {
//     return (
//       <div
//         style={this.props.style}
//         className={`dropdown ${this.state.open ? "open" : null}`}
//       >
//         <button
//           onClick={this.toggleDropdown}
//           className="btn btn-default dropdown-toggle"
//           type="button"
//           id="dropdown"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="true"
//         >
//           {this.props.selected.text}
//           <span className="caret"></span>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="dropdown">
//           {/* Here we render all of our li option tags */}
//           {this.renderList()}
//         </ul>
//       </div>
//     );
//   }
// }









// import React, { Component } from "react";

// // Importing our dropdown component
// import TournamentAllOptions from "./TournamentAllOptions";

// // Defining a list of dropdown options here
// const tournamentAllOptions = [
//   {
//     text: "All Tournaments",
//     value: "All"
//   }, {
//     text: "Created Tournaments",
//     value: "MLQ"
//   }, {
//     text: "Attending Tournaments",
//     value: "USQ"
//   }
// ];

// class TournamentAllPanel extends Component {
//   // Initializing our dropdownOptions on state, setting a default selected option
//   // Also setting all of our possible options using the dropdownOptions variable
//   constructor() {
//     super();
//     this.state = {
//       tournamentAllOptions,
//       selected: {
//         text: "All Tournaments",
//         value: "All"
//       },
//       display: "all",
//       showAll (){
//         this.setState({display: "all"})
//         console.log("Show All clicked")
//     },
//     showAttending (){
//         this.setState({display: "attending"})
//         console.log("Show Attending clicked")
//     },
//     showCreated (){
//         this.setState({display: "created"})
//         console.log("Show Created clicked")
//     }
//     };
//     // Binding handleDropdownSelect to our component since we'll be passing
//     // This method to another component
//     this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
//     this.allPanelDisplay = this.allPanelDisplay.bind(this);
//   }
//   // This function is called by the Dropdown component whenever an option is chosen
//   handleDropdownSelect(option) {
//     // Setting this.state.selected to the dropdown option the user clicks
//     this.setState({ selected: option });
//   }

//   allPanelDisplay(option){
//     switch(option){
//       case "All":
//         return (
//           <div>All Tournaments</div>
//         );
//       case "MLQ":
//         return (
//           <div>MLQ Tournaments</div>
//         );
//       case "USQ":
//         return (
//           <div>USQ Tournaments:</div>
//         );
//       case "Other":
//         return (
//           <div>Other Tournaments:</div>
//         );
//       default: 
//         return (
//           <div>Choose which tournaments you would like to see.</div>
//         );
//     };
//   }
    
//     renderForm (){
//         return(
//             <div className="display-button-container">
//                 <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
//                 <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
//                 <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
//             </div>
//         );
//     }


//   render() {
//     let selectedDisplay = this.state.display;
//     if (selectedDisplay == "all"){
//         return (
//             <div>
//                 <div className="display-button-container">
//                     <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
//                     <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
//                     <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
//                 </div>
//                 <h1>All Tournament Container</h1>
//             </div>
//         );
//     }
//     if (selectedDisplay == "attending"){
//         return (
//             <div>
//                 <div className="display-button-container">
//                     <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
//                     <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
//                     <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
//                 </div>
//                 <h1>Attending Tournament Container</h1>
//             </div>
//         );
//     }
//     if (selectedDisplay == "created"){
//         return (
//             <div>
//                 <div className="display-button-container">
//                     <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
//                     <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
//                     <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
//                 </div>
//                 <h1>Created Tournament Container</h1>
//             </div>
//         );
//     }
//     // return (
//     //     <div>
//     //     <h1>TournamentContainer</h1>
//     //   <div className="panel panel-default">
//     //     <div
//     //       style={styles.panelHeadingStyle}
//     //       className="panel-heading"
//     //     >

//     //       Choose One!
//     //       <TournamentAllOptions
//     //         style={styles.dropdownStyle}
//     //         options={this.state.tournamentAllOptions}
//     //         selected={this.state.selected}
//     //         handleSelect={this.handleDropdownSelect}  
//     //       />
//     //     </div>
//     //     <div className="panel-body">
//     //     {this.allPanelDisplay(selectedDisplay)}
//     //     </div>
//     //   </div>
//     //   </div>
//     // );
//   }
// }

// // Some styles we'll pass to our Panel component and dropdown component
// const styles = {
//   dropdownStyle: {
//     float: "right",
//     bottom: 10
//   },
//   panelHeadingStyle: {
//     padding: 20
//   }
// };

// // Exporting our Panel component
// export default TournamentAllPanel;
