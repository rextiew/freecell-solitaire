class Time_counting extends React.Component {
  constructor(props){
    super(props);
	this.state = {
		minute: 0,
		second: 0,
	}
  }
  componentDidMount() {
	let total_second = 0;
	setInterval( () => {
		total_second++;
		this.setState({
			minute: Math.floor((total_second / 60)),
			second: (total_second % 60), 
		})
	}, 1000);
  }
  render() {
    return(
		<div id="time">
			<span>{("0" + this.state.minute).slice(-2)}:{("0" + this.state.second).slice(-2)}</span>
		</div>
    );
  }
}

ReactDOM.render(<Time_counting />, document.getElementById( 'time_wrapper' ) );