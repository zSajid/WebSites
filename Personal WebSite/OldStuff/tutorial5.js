// This program creates an incrementer
var Counter = React.createClass({
	incrementCount: function(){
		this.setState({
			count: this.state.count+1
		});
	},

	getInitialState: function(){
		return{
			count:0
		}
	},

	render: function(){
		return(
				<div class="my-comp">
					<h1>Count: {this.state.count}</h1>
					<button type="button" onClick={this.incrementCount}>Increment</button>
				</div>
			);
	}

});
React.render(
			<Counter />, document.getElementById('content')
	);