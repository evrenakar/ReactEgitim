/**
 * Created by evren.akar on 27.9.2015.
 */

var YeniBilesen = React.createClass({
    render: function() {
        return (
            <div>
                {/* Hello world */}
                <div className="awesome" style={{border: '1px solid red'}}>
                    <label htmlFor="name">İsim: </label>
                    <input type="text" id="name" />
                </div>
                <p>İsminizi girin</p>
            </div>
        );
    }
});

React.render(
    <YeniBilesen />, document.body
);