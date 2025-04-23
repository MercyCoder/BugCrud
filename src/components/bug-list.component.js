import React, { Component } from "react";
import BugAxiosService from "../services/axios.service";

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
    BugAxiosService.getAll()
      .then((response) => {
        this.setState({
          bugs: response.data.records,
        });
      })
      .catch((e) => {
        console.error(e);
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
    BugAxiosService.deleteAll()
      .then((response) => {
        this.refreshList();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  searchTitle() {
    BugAxiosService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          bugs: response.data.records,
        });
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
