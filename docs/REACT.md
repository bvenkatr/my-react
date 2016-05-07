## React fundamentals

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Hello World</title>
		<script src="./plugins/react.js"></script>
		<script src="./plugins/JSXTransformer.js"></script>
	</head>
	<body>
		<!-- Create component using jsx syntax -->
		<script type="text/jsx">
			var App = React.createClass({
				render: function(){
					return <h1>Hiiiiiii</h1>
				}
			});
			React.render(<App />, document.body)
		</script>

		<!-- Create component using DOM syntax -->
		<script>
			var App = React.createClass({
				render: function(){
					return React.DOM.h1(null, "Hi there");
				}
			});
			React.render(App(), document.body);
		</script>

		<!-- Create component using React.createStatement -->
		<!-- Here default type for script is type="text/javascript" -->
		<script>
			var App = React.createClass({
				render: function(){
					return React.createElement("h1", null, "Yo");
				}
			});
			React.render(React.createElement(App), document.body);
		</script>
	</body>
</html>
```
```
render: function(){
	return 
		<div>                            ===> This is wrong
			<b> Bold </b>
			<h1> Hello World </h1>
		</div>
}

render: function(){
	return <div>                            ===> This is correct, did you observe the position of first div
				<b> Bold </b>
				<h1> Hello World </h1>
			</div>
}

render: function(){
	return (                            ===> This is correct, because we have used () to enclose html
		<div>
			<b> Bold </b>
			<h1> Hello World </h1>
		</div>
		)
}
```

####Introduction to properties
var App = 
