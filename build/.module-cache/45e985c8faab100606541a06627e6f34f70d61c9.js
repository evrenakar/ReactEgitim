/**
 * Created by evren.akar on 27.9.2015.
 */

var YeniBilesen = React.createClass({displayName: "YeniBilesen",
    render: function() {
        return (
            React.createElement("div", null, 
                /* Hello world */
                React.createElement("div", {className: "awesome", style: {border: '1px solid red'}}, 
                    React.createElement("label", {htmlFor: "name"}, "�sim: "), 
                    React.createElement("input", {type: "text", id: "name"})
                ), 
                React.createElement("p", null, "this.state.")
            )
        );
    }
});

React.render(
    React.createElement(YeniBilesen, null), document.body
);