import {
	Routes,
	Route,
	BrowserRouter as Router
} from 'react-router-dom'
import LoginPage from './pages/Login/Login';
import SignUpPage from './pages/SignUp/SignUp';
import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFound';
// import Header from "./components/Header/Header";

const App = () => {
	return (
		<>
			{/* <Header /> */}
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signIn" element={<LoginPage />} />
					<Route path="/signUp" element={<SignUpPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;