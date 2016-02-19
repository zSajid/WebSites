var Comment = React.createClass({
	render: function(){
		return(
			<div className = "comment">
				   initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
				</div>
			);
	}

});

	React.render(
			<Comment author= "Zeeshan."/>, document.getElementById('content')
		);