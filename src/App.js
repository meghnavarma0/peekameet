import './App.css';
import SignIn from './Components/SignIn/SignIn';
import UserProfile from './Components/UserProfile/UserProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Switch>
					<Route path='/profile'>
						<UserProfile />
					</Route>
					<Route path='/' exact>
						<SignIn />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
