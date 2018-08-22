import React, { Component } from 'react';
import Header from './component/Header';
import CartContainer from './containers/CartContainer';
import Footer from './component/Footer';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
class App extends Component {
	render() {
		return (
			<div>
				{/* Header */}
				<Header />
				<main id="mainContainer">
					<div className="container">
						{/* Products */}
						<ProductsContainer />
						{/* Message */}
						<MessageContainer />
						{/* Cart */}
						<CartContainer />
					</div>
				</main>
				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
