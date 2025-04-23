import React, { Component } from "react";
import Airtable from "airtable";

export default class DeleteBug extends Component {
  constructor(props) {
    super(props);
    this.deleteBug = this.deleteBug.bind(this);
    this.state = {
      id: null,
    };
  }

  deleteBug(e){
  //   this.Airtable.base('Bugs')( e.target.value,
  //   function (err, deletedRecords) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log("Deleted", deletedRecords.length, "records");
  //   }
  // );
  // console.log();
  }

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
              <label htmlFor="Title">Bug ID</label>
              <input
                type="text"
                className="form-control"
                id="Title"
                required
                value={this.state.Title}
                onChange={this.onChangeTitle}
                name="Title"
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
