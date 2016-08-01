import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

class PostsIndex extends Component {

  componentWillMount() {
    console.log('Fetch all the posts here');
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => (
      <li key={post.id} className="list-group-item">
      <Link to={`/posts/${post.id}`}>
        <span className="pull-right">{post.categories}</span>
        <strong>{post.title}</strong>
      </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }


}
PostsIndex.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts,
  }, dispatch);
}

// Rather than taking the mapDispatchToProps function as a parameter.
// We just pass an object that gathers the action creators which seems
// to be implicitly wrapped by a dispatch.
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
