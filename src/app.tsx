import * as b from "bobril";
import * as c from "bobwai--color"

function App() {
	return <>
		<div style={{color: c.Chart_Green100}}>Hello world</div>
	</>;
}

b.addRoot(() => {

	return App()
}, document.getElementsByTagName("body")[0]);