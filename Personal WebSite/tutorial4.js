/*
var Comment = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});
*/
var Comment = React.createClass({
	render: function(){
		return(
			<div className = "comment">
				<h2 className="commentAuthor">
					The author is: {this.props.author}

				</h2>
					{this.props.children}
				</div>
			);
	}

});

	React.render(
			<Comment author= "Zeeshan."/>, document.getElementById('content')
		);