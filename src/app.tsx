import * as b from "bobril";

b.addRoot(() => {
	return <div>Hello world</div>
}, document.getElementsByTagName("body")[0]);