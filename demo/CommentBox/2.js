var CommentBox = React.createClass({
	render:function(){
		return(
			React.createElement('div',{className:"commentBox"},"hello commentBox!")
		);
		
	}
});

ReactDOM.render(
	React.createElement(CommentBox,null),
	document.getElementById('content')
)