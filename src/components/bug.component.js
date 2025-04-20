import React, { Component } from "react";
import BugDataService from "../services/bug.service";
import { withRouter } from '../common/with-router';

class Bug extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getBug = this.getBug.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateBug = this.updateBug.bind(this);
    this.deleteBug = this.deleteBug.bind(this);

    this.state = {
      currentBug: {
        id: null,
        Title: "",
        Description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getBug(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBug: {
          ...prevState.currentBug,
          Title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentBug: {
        ...prevState.currentBug,
        Description: description
      }
    }));
  }

  getBug(id) {
    BugDataService.get(id)
      .then(response => {
        this.setState({
          currentBug: response.data.records
        });
        console.log(response.data.records);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentBug.id,
      Title: this.state.currentBug.Title,
      Description: this.state.currentBug.Description,
      published: status
    };

    BugDataService.update(this.state.currentBug.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentBug: {
            ...prevState.currentBug,
            published: status
          }
        }));
        console.log(response.data.records);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateBug() {
    BugDataService.update(
      this.state.currentBug.id,
      this.state.currentBug
    )
      .then(response => {
        console.log(response.data.records);
        this.setState({
          message: "The bug was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteBug() {    
    BugDataService.delete(this.state.currentBug.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/bugs');
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentBug } = this.state;

    return (
      <div>
        {currentBug ? (
          <div className="edit-form">
            <h4>Bug</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentBug.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentBug.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentBug.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentBug.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteBug}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateBug}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Bug...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Bug);