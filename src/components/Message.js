import React, {Component} from 'react';

class Message extends Component {
  render(){
    return (
      <div>
        {this.props.message} 
        <span className="icon"  onClick = {this.props.dclick} id={this.props.id} style={{ "float": "right"}}><i className="fas fa-trash-alt"></i></span>
        <span className="icon"  onClick = {this.props.click} id={this.props.id} style={{ "float": "right"}}><i className="fas fa-pencil-alt"></i></span>
      </div>
    )
  }
}

export default Message