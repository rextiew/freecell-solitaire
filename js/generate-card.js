class Generated_card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: "ABCD",
      max_number: 13,
      total_card: 52,
	  cards: [],
    };
  }
  componentDidMount() {
    let cards = [];
    let charactersLength = this.state.type.length;
	let count = 0;
    for( let i = 1; i < (charactersLength + 1); i++ ){
		for( let j = 1; j <= this.state.max_number; j++ ){
			cards[count] = this.state.type.charAt( i-1 ) + j;
			count++;
		}
    }
	
	for (let k = cards.length - 1; k > 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [cards[k], cards[l]] = [cards[l], cards[k]];
    }
	this.setState({ cards });
  }
  render() {
    return(
		<div className="all_card all-card-container">
		  <div className="row">
			{this.state.cards.map( ( card, key ) => (
				<div key={card} className="background-image freecell-card-column" id={card} data-type={card.charAt(0)} data-num={card.substring(1)}>
					<img src={"./images/poker/"+card+".png"} width="100%" />
				</div>
			))}
		  </div>
		</div>
    );
  }
}

ReactDOM.render(<Generated_card />, document.getElementById( 'card_wrapper' ) );