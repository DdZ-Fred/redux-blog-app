import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h3>New post form</h3>

        <form className="form" onSubmit={handleSubmit(this.props.createPost)}>

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" className="form-control" {...title}/>
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories:</label>
            <input type="text" className="form-control" {...categories}/>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea className="form-control" {...content}></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>

      </div>
    );
  }
}


export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsNew);
