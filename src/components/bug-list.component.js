import React, { Component } from "react";
import BugDataService from "../services/axios.service";
import { Link } from "react-router-dom";

export default class BugsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveBugs = this.retrieveBugs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBug = this.setActiveBug.bind(this);
    this.removeAllBugs = this.removeAllBugs.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      bugs: [],
      currentBug: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.retrieveBugs();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  retrieveBugs() {
    BugDataService.getAll()
      .then((response) => {
        this.setState({
          bugs: response.data.records,
        });
        console.log(response.data.records + "retrieve Bugs!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBugs();
    this.setState({
      currentBug: null,
      currentIndex: -1,
    });
  }

  setActiveBug(bug, index) {
    this.setState({
      currentBug: bug,
      currentIndex: index,
    });
  }

  removeAllBugs() {
    BugDataService.deleteAll()
      .then((response) => {
        console.log(response.data.records);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    BugDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          bugs: response.data.records,
        });
        console.log(response.data.records);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, bugs, currentBug, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Bugs List</h4>

          <ul className="list-group">
            {bugs.map((bug, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveBug(bug, index)}
                key={index}
              >
                {bug.fields.Title}
              </li>
            ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllBugs}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentBug ? (
            <div>
              <h4>Bug</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentBug.fields.Title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentBug.fields.Description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentBug.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/Bugs/" + currentBug.id}
                className="badge badge-warning"
              >
                Edit ???????
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Bug...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
