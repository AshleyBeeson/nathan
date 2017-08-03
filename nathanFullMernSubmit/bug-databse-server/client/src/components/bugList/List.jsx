import React, { Component } from 'react';
import BugDetails from './BugDetails';
//import data from '../../database/bugs';
import Client from '../../client'; //imports the methods from the client.js file

export default class Header extends Component {
  constructor() {
  		super();

  		 this.state = {
        initialData: [],
        bugs: [],
        filteredBugs: [],
        sortedBugs: []
  		}
    }
    componentWillMount() {
      console.log('Mounting List component');
      // this.setState({
      //     bugs: data.bugs
      // });
      Client.fetchBugs(bugs => { //calls the fetch bugs method and returns it as a variable called bugs
				this.setState({
					initalData: bugs,
          bugs: bugs
  			});
      console.log('bugs state set to equal imported data')
      console.log(this.state.bugs);
    });
    console.log('data imported');
  };


    displayBugs() {         //this method allows the correct bugs to be displayed depending  on whether the it is the orignal array, a sorted array or a filtered array
      console.log('displayBugs method called')
      if(this.state.filteredBugs != ''){
			return this.state.filteredBugs.map((bug, idx) => {
				return(
					<BugDetails key={idx} id={bug.id} issueId={bug.issueId} dateCreated={bug.dateCreated} summary={bug.summary} description={bug.description} highPriority={bug.highPriority}
          severity={bug.severity} reporter={bug.reporter} assignedUser={bug.assignedUser} actions={bug.actions} />
				);
			});
    }
    else if(this.state.sortedBugs != ''){
    return this.state.sortedBugs.map((bug, idx) => {
      return(
        <BugDetails key={idx} id={bug.id} issueId={bug.issueId} dateCreated={bug.dateCreated} summary={bug.summary} description={bug.description} highPriority={bug.highPriority}
        severity={bug.severity} reporter={bug.reporter} assignedUser={bug.assignedUser} actions={bug.actions} />
      );
    });
  }
      else{
        return this.state.bugs.map((bug, idx) => {
  				return(
  					<BugDetails key={idx} id={bug.id} issueId={bug.issueId} dateCreated={bug.dateCreated} summary={bug.summary} description={bug.description} highPriority={bug.highPriority}
            severity={bug.severity} reporter={bug.reporter} assignedUser={bug.assignedUser} actions={bug.actions} />
  				);
  			});
      }

    };

    reset() {
      console.log(this.state.filteredBugs);
      console.log(this.state.sortedBugs);
      console.log(this.state.bugs);
      this.setState({
        filteredBugs: '',
        sortedBugs: '',
        bugs: this.state.initalData
      })
      console.log('all 3 states set to default')
    }

    filterByHighPriorityTrue() {
      let tempArray = this.state.bugs.filter(function (el) { //create variable called tempArray and make it equal that bugs state subject to a filter
        return (el.highPriority === 'TRUE');                 //where for each element in the array, if the attribute highPriority is equal to TRUE then
      });                                                    //it is added to the tempArray
      console.log(tempArray);
      this.setState({
        filteredBugs: tempArray   //sets the filteredBugs state to equal the tempArray which contains only the bugs which passed the filter process
      });
      console.log(this.state.filteredBugs);
    }

    filterByHighPriorityFalse() {
      let tempArray = this.state.bugs.filter(function (el) {
        return (el.highPriority === 'FALSE');
      });
      console.log(tempArray);
      this.setState({
        filteredBugs: tempArray
      });
      console.log(this.state.filteredBugs);
    }

    filterBySeverityHigh() {
      let tempArray = this.state.bugs.filter(function (el) {
        return (el.severity === 'HIGH');
      });
      console.log(tempArray);
      this.setState({
        filteredBugs: tempArray
      });
      console.log(this.state.filteredBugs);
    }

    filterBySeverityMedium() {
      let tempArray = this.state.bugs.filter(function (el) {
        return (el.severity === 'MEDIUM');
      });
      console.log(tempArray);

      this.setState({
        filteredBugs: tempArray
      });
      console.log(this.state.filteredBugs);
    }

    filterBySeverityLow() {
      let tempArray = this.state.bugs.filter(function (el) {
        return (el.severity === 'LOW');
      });
      console.log(tempArray);

      this.setState({
        filteredBugs: tempArray
      });
      console.log(this.state.filteredBugs);
    }


  //   toggleSorted() {
	// 	this.setState({sorted: !this.state.sorted});
	// }

    sortByJsonAttribute(bugArray, attr) { //defines a method to take in an array and an attribute within that array as arguments.
      console.log('sortByJsonAttribute function called');
      return bugArray.sort(function(p, q){ //starts the return function
        let x = p[attr]; let y=q[attr]; //set two variables. One is equal to the passed in attribute of one bug in the array, and the other is equal to a different bug in the array
        return ((x<y) ? -1: ((x>y) ? 1 : 0)); //if the first bugs attribute is less than the second, move that first bug to be after the second bug, and visa versa.
      });                                     //if they equal each other, position remains unchanged.
    };

    sortByIdAscending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'id'); //calls the sortByJsonAttribute function and passes in the tempArray and the attribute I want to sort by.
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray //sets the sortedBugs state to equal the newly sorted tempArray.
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');

  }

    sortByIdDescending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'id'); //calls the sortByJsonAttribute function and passes in the tempArray and the attribute I want to sort by.
      tempArray.reverse(); //because this is the sort by decending method, I then reverse the order of the sorted array with the .reverse() function.
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray //sets the sortedBugs state to equal the newly sorted tempArray.
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByIssueIdAscending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'issueId');
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByIssueIdDescending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'issueId');
      tempArray.reverse();
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByReporterAscending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'reporter');
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByReporterDescending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'reporter');
      tempArray.reverse();
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByPriorityAscending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'highPriority');
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortByPriorityDescending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'highPriority');
      tempArray.reverse();
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortBySeverityAscending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'severity');
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

    sortBySeverityDescending() {
      console.log('sortById function called');
      let tempArray = [];
      if(this.state.filteredBugs == '') {
        tempArray = this.state.bugs; //creates a temporary array equal to the current state.bugs array if no filter has been applied to the vanilla data
      } else {
          tempArray = this.state.filteredBugs; //creates a temporary array equal to the current state.filteredBugs array
        }
      tempArray = this.sortByJsonAttribute(tempArray, 'severity');
      tempArray.reverse();
      console.log("sorting array");
      this.setState({
        sortedBugs: tempArray
      });
      console.log('sortedBugs state set to equal newly sorted tempArray');
    };

  render() {
    //console.log(this.state.bugs)
    return(
      <div className='bugList'>
        <h3>Bug List</h3>

        <table className='mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'>
          <tr>
            <td>Filter By Options:</td>
            <td><input type='button' value='high Priority True' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.filterByHighPriorityTrue.bind(this)} /></td>
            <td><input type='button' value='high Priority False' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.filterByHighPriorityFalse.bind(this)} /></td>
            <td><input type='button' value='severity high' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.filterBySeverityHigh.bind(this)} /></td>
            <td><input type='button' value='severity medium' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.filterBySeverityMedium.bind(this)} /></td>
            <td><input type='button' value='severity low' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.filterBySeverityLow.bind(this)} /></td>
          </tr>
          <tr>
            <td>Sort By Ascending Options:</td>
            <td><input type='button' value='id' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByIdAscending.bind(this)} /></td>
            <td><input type='button' value='issue Id' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByIssueIdAscending.bind(this)} /></td>
            <td><input type='button' value='priority' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByPriorityAscending.bind(this)} /></td>
            <td><input type='button' value='severity' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortBySeverityAscending.bind(this)} /></td>
            <td><input type='button' value='reporter' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByReporterAscending.bind(this)} /></td>
          </tr>
          <tr>
          <td>Sort By Descending Options:</td>
            <td><input type='button' value='id' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByIdDescending.bind(this)} /></td>
            <td><input type='button' value='issue Id' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByIssueIdDescending.bind(this)} /></td>
            <td><input type='button' value='priority' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByPriorityDescending.bind(this)} /></td>
            <td><input type='button' value='severity' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortBySeverityDescending.bind(this)} /></td>
            <td><input type='button' value='reporter' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.sortByReporterDescending.bind(this)} /></td>
          </tr>
          <tr>
            <td><input type='button' value='Reset' className='mdl-button mdl-js-button mdl-button--primary' onClick={this.reset.bind(this)} /></td>
          </tr>
        </table>
        {this.displayBugs()}
      </div>
    );
  }
}
//{this.state.bugs}
//onClick={this.toggleSorted.bind(this)}
