import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const propTypes = {
  params: PropTypes.object.isRequired,
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}
PostsShow.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    post: state.posts.post,
  };
}


export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
