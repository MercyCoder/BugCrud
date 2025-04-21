import React, { Component } from "react";
import BugDataService from "../services/bug.service";

export default class AddBug extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveBug = this.saveBug.bind(this);
    this.newBug = this.newBug.bind(this);

    this.state = {
      id: null,
      Title: "",
      Description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      Title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      Description: e.target.value,
    });
  }

  saveBug() {
    var data = {
      Title: this.state.Title,
      Description: this.state.Description,
    };

    BugDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.fields.Title,
          description: response.data.fields.Description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newBug() {
    this.setState({
      id: null,
      Title: "",
      Description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBug}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Title">Title</label>
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

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.Description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveBug} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
