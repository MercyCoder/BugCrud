import React, { Component } from "react";
import Airtable from "airtable";

export default class DeleteBug extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.state = {
      id: "",
      records: null,
    };
    // Pass in Airtable bearer token and base ID here:
    this.base = new Airtable({
      apiKey: "AIRTABLE_API_TOKEN",
    }).base("AIRTABLE_API_BASEID");
  }
  componentDidMount() {
    this.fetchData();
  }
  onChangeID(e) {
    this.setState({
      id: e.target.value,
    });
  }
// Console logs here for WIP development
// Fetching data is working, and those bug IDs can be used to delete from the UI
  fetchData = () => {
    this.base("Bugs")
      .select({})
      .eachPage((records, fetchNextPage) => {
        this.setState({ records: records });
        fetchNextPage();
        console.log(records, this.state.records);
      });
  };
// Console logs here for WIP development
// I could display the IDs in the Bug list but it would be a better to allow for deleting 
// in the bug list component and use the target click.
  deleteBug = () => {
    if (this.state.id != undefined) {
      this.base("Bugs").destroy(this.state.id, function (err) {
        if (err) {
          console.log("Error destroying ", this.state.id, err);
        } else {
          console.log("Destroyed " + this.state.id);
        }
      });
    } else {
      console.log("Undefined Bug");
    }
  };

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You deleted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBug}>
              Delete Another Bug
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="ID">Bug ID</label>
              <input
                type="text"
                className="form-control"
                id="bugID"
                required
                value={this.state.id}
                onChange={this.onChangeID}
                name="bugID"
              />
            </div>
            <button onClick={this.deleteBug} className="btn btn-success">
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
