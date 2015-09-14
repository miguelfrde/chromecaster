const React = require('react');
const mui = require('material-ui');

const Section = React.createClass({
  render() {
    const style = {
      padding: 32,
      textAlign: 'center',
      marginTop: 64
    };

    return (
      <section style={style}>
        {this.props.children}
      </section>
    );
  }
});

module.exports = Section;
