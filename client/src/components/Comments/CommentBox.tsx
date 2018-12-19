import React, { Component } from 'react';
import { SubmitVoid } from '../../types/dom-events-types';

type Props = SubmitVoid;

class CommentBox extends Component<Props> {
  render() {
    return (
      <form className="form-inline" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="comment"
            placeholder="Write a Comment..."
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Post
          </button>
        </div>
      </form>
    );
  }
}
export default CommentBox;