import React from 'react';


const Section = React.createClass({
  render() {
    const style = {
      padding: 32,
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
