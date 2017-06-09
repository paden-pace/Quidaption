
// Unzip and open the folder that was slacked out. Run npm install.
// Navigate to the Panel.js file. Here we want to write some logic in order 
  // to render the following inside the panel-body div inside of the render method:

// When this.state.selected.value is equal to "SHOW_LOREM", 
  // render a paragraph of lorem ipsum (or any text of your choice).
// When this.state.selected.value is equal to "SHOW_CAT" 
  // render an image of a cat (anything you can find online).
// When this.state.selected.value is equal to "SHOW_NOTHING", 
  // make sure nothing is rendered inside the panel-body div.

// Important: this.state.selected changes whenever the dropdown is changed.
// There are multiple ways to accomplish this, take a minute to checkout Facebook's docs on conditional rendering in React:





import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "Show Lorem",
    value: "SHOW_LOREM"
  }, {
    text: "Show Cat Picture",
    value: "SHOW_CAT"
  }, {
    text: "Hide Everything",
    value: "SHOW_NONE"
  }
];

class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Show Lorem",
        value: "SHOW_LOREM"
      }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.panelDisplay = this.panelDisplay.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

  panelDisplay(option){
    switch(option){
      case "SHOW_CAT":
        return (<div>Pretend it's a cat</div>);
      case "SHOW_LOREM":
        return (<div>Pretend it's some Lorem</div>);
      default: 
        return (<div>You saw nothing</div>)
    };
    // if (this.state.selected == )
    // function UserGreeting(props) {
    //   return <h1>Welcome back!</h1>;
    // }

    // function GuestGreeting(props) {
    //   return <h1>Please sign up.</h1>;
    // }
  }


  render() {
    let selectedOption = this.state.selected.value;
    return (
      <div className="panel panel-default">
        <div
          style={styles.panelHeadingStyle}
          className="panel-heading"
        >
          Choose One!
          <Dropdown
            style={styles.dropdownStyle}
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}  
          />
        </div>
        <div className="panel-body">
        {this.panelDisplay(selectedOption)}
        </div>
      </div>
    );
  }
}

// Some styles we'll pass to our Panel component and dropwdown component
const styles = {
  dropdownStyle: {
    float: "right",
    bottom: 10
  },
  panelHeadingStyle: {
    padding: 20
  }
};

// Exporting our Panel component
export default Panel;
