import * as React from "react";
import { connect } from "react-redux";
import { selectNewItem } from "../../actions/AppActions";

/**
*
*/
export interface AppProps {
	selectNewItem: (n: number) => void;
	selectedItemId: Number;
}

/**
*
*/
class App extends React.Component<AppProps, {}> {

	/**
	*
	*/
	constructor(args: any) {
		super(args);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	/**
	*
	*/
	shouldComponentUpdate(nextProps: AppProps, nextState: {}) {
		if (nextProps === this.props && this.state === nextState) return false;
		else return true;
	}

	/**
	*
	*/
	handleButtonClick(event: Event) {
		let newItem: number = Math.ceil( Math.random() * 10 );
		if (this.props.selectNewItem) {
			this.props.selectNewItem(newItem);
		}
	}

	/**
	*
	*/
	render() {
		return (
			<div>
				<h1>App Component</h1>
				<h2>Selected item is {this.props.selectedItemId}</h2>
				<hr/>
				<div className={"buttons"}>
					<button className={"buttons__button"} onClick={this.handleButtonClick}>Random</button>
					<button className={"buttons__button"} onClick={this.handleButtonClick}>Random</button>
					<button className={"buttons__button"} onClick={this.handleButtonClick}>Random</button>
				</div>
			</div>
		);
	}
}

/**
*
*/
const select = (state: Immutable.Map<String, any>) => {
	const newState = {
		selectNewItem: selectNewItem,
		selectedItemId: state.get("selectedItemId")
	};
	return newState;
};

export default connect(select)(App);
