import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const propTypes = {
  posts: PropTypes.object.isRequired,
};

class PostsIndex extends Component {

  componentWillMount() {
    console.log('Fetch all the posts here');
    this.props.fetchPosts();
  }

  render() {
    // const posts = this.props.posts.all.map((p) => (
    //   <li>p</li>
    // ));

    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add post</Link>
        </div>
        List of blog posts
      </div>
    );
  }


}
PostsIndex.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    posts: state.posts,
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
