
import '../styles/globals.css'
import MainNavigation from '../components/layouts/MainNavigation'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<MainNavigation />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
