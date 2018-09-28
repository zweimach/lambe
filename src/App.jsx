import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TYPES } from './store';
import { socket } from './socket';
import { TitleBar, SideBar, MessageList } from './components';
import { MessageInput } from './containers';
import LoginPanel from './containers/LoginPanel';

const styles = {
	GridContainer: {
		display: 'grid',
		grid: {
			gap: '10px',
			templateAreas: '"header header"\n"sidebar content"\n"sidebar control"',
			templateColumns: 'minmax(50px, 150px) minmax(50px, 450px)',
			templateRows: 'minmax(50px, 100px) minmax(50px, 400px) minmax(50px, 100px)'
		},
		margin: 'auto',
		maxWidth: '600px'
	}
};

class App extends Component {
	state = {
		loggedIn: false
	}
	logIn = (name) => {
		this.setState({ loggedIn: true });
		socket.send(JSON.stringify({
			type: TYPES.ADD_USER,
			payload: {
				name
			}
		}));
	}
	componentDidMount() {
		document.title = 'Chat App';
	}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				{ !this.state.loggedIn ? <LoginPanel logIn={this.logIn}/> :
					(<div className={classes.GridContainer}>
						<TitleBar />
						<SideBar />
						<MessageList />
						<MessageInput />
					</div>) }
			</Fragment>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
