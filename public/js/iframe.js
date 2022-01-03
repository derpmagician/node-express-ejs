const getEl = selector => document.querySelector(selector);

const htmlEl = getEl("#html");
const cssEl = getEl("#css");
const jsEl = getEl("#js");

function update() {
	const html = renderPage();
	getEl("iframe").setAttribute('srcdoc', html)
}

html.addEventListener('input', update);
css.addEventListener('input', update);
js.addEventListener('input', update);

const renderPage = () => {
	const html = htmlEl.value;
	const css = cssEl.value;
	const js = jsEl.value;

	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Render</title>
			<style>${css}</style>
		</head>
		<body>
			${html}
			<script>${js}</script>
		</body>
		</html>
	`
}