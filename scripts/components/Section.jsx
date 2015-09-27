import React from 'react';


export default class Section extends React.Component {
  render() {
    const style = {
      height: '100%',
      marginTop: 64
    };

    return (
      <section style={style}>
        {this.props.children}
      </section>
    );
  }
}
