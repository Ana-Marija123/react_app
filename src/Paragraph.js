import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paragraph extends Component{
    render(){
        return(
            <p className="App-intro">{this.props.someContent} <b>{this.props.someNumbers}</b></p>
        )
    }
}


Paragraph.propTypes = {
    someContent: PropTypes.string
  };

export default Paragraph;