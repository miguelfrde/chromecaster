import React from 'react';


export default class Section extends React.Component {
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
}
