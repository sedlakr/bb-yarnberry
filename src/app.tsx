import * as b from "bobril";
import * as c from "bobwai--color"

function App() {
	const [clicked, setClicked] = b.useState(0);
	return <>
		<div style={{color: clicked % 2 === 0 ? c.Warning300 : c.Error300}}>Hello world {clicked}, <button
			onClick={() => {
				setClicked(clicked + 1)
			}}>inc</button></div>
	</>;
}

b.addRoot(() => {

	return App()
}, document.getElementsByTagName("body")[0]);