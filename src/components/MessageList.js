import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component{

	constructor (props){
		super(props);
    	this.delete = this.delete.bind(this);
		this.state =  {
			messages: []
		};
		let app = this.props.db.database().ref('messages');
		app.on('value', snapshot => {
      		this.getData(snapshot.val());
    	});
	}

	getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: messages
      });
  }

  onClick(e){
  		console.log(e.target.parentNode.getAttribute("id"));
  		console.log(e.target.parentNode.parentNode.textContent);
  		document.getElementById("msg").value = e.target.parentNode.parentNode.textContent;
  		document.getElementById("msgid").value = e.target.parentNode.getAttribute("id");
  	console.log("Clicked works!!");
  }

delete(e){
	  		console.log(e.target.parentNode.getAttribute("id"));
	  		let m = e.target.parentNode.getAttribute("id");
	  		let app = this.props.db.database().ref('/messages/'+m);
	  		app.remove();

}
	render() {

		let messageNodes = this.state.messages.map((message,index) => {
				return (
					<div className="card" key={index}>
						<div className="card-content">
							<Message message = {message.message} id = {message.id} click = {this.onClick} dclick = {this.delete}  />
							
						</div>
					</div>
				)
			});

		return (
				<div>	
					{messageNodes}
				</div>
			)
		
	}
}



export default MessageList