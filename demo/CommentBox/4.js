//Using props
var Comment = React.createClass({
	render:function(){
		return (
			<div className="comment">
		        <h2 className="commentAuthor">
		        	{this.props.author}
		        </h2>
		        {this.props.children}
		    </div>
		)
	}
});

var CommentList = React.createClass({
	render:function(){
		return (
			<div className="commentList">
		        <Comment author="lee">this is acomment</Comment>
		        <Comment author="jersey">this is another acomment</Comment>
		    </div>
		)
	}
});

ReactDOM.render(
	<CommentList/>,
	document.getElementById('content')
)