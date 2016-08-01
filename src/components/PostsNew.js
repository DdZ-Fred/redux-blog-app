import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link, withRouter } from 'react-router';

const propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

class PostsNew extends Component {

  constructor(props) {
    super(props);

    // Handlers bindings
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.createPost(values)
      .then(({ data }) => {
        // BLog post has been created
        console.log('New blog post data', data);
        // Navigate to index
        this.props.router.push('/');
      });
  }


  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h3>New post form</h3>

        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>

          <div className={`form-group ${title.touched && title.invalid && 'has-error'}`}>
            <label htmlFor="title">Title:</label>
            <input type="text" className="form-control" {...title}/>
            {
              title.touched && title.error &&
              <div className="alert alert-danger">{title.error}</div>
            }
          </div>
          <div className={`form-group ${categories.touched && categories.invalid && 'has-error'}`}>
            <label htmlFor="categories">Categories:</label>
            <input type="text" className="form-control" {...categories}/>
            {
              categories.touched && categories.error &&
              <div className="alert alert-danger">{categories.error}</div>
            }
          </div>
          <div className={`form-group ${content.touched && content.invalid && 'has-error'}`}>
            <label htmlFor="content">Content:</label>
            <textarea className="form-control" {...content}></textarea>
            {
              content.touched && content.error &&
              <div className="alert alert-danger">{content.error}</div>
            }
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>

      </div>
    );
  }
}
PostsNew.propTypes = propTypes;

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// reduxForm params:
// - Param #1: Object that gathers the form details
// - Param #2: mapStateToProps, similarly to React-Redux connect()
// - Param #3: mapDispatchToProps, similarly to React-Redux connect() again
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(withRouter(PostsNew));
