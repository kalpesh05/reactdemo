import React, {Component} from 'react';
import trim from 'trim';


class MessageBox extends Component{


	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onKeyup = this.onKeyup.bind(this);
		this.state = {
			message : ''
		};
	}

	onChange(e){
		this.setState({
			message : e.target.value
		});
	}

	onKeyup(e){

		if(e.keyCode === 13 && trim(e.target.value) !== ''){

			e.preventDefault();
			let mid = document.getElementById("msgid").value;
			alert(mid);
			if(mid === ''){

				let dbCon = this.props.db.database().ref('/messages');
				let ref = dbCon.push();
				let key = ref.key;
				ref.update({
					message: trim(e.target.value)
				});
			}else{
				let dbCon = this.props.db.database().ref('/messages/'+mid);		
				dbCon.update({
					message: trim(e.target.value)
				});
			}


			this.setState({
				message: ''
			});
		}
	}
	render() {

		return (

			<form>
				<input type="hidden" id="msgid" />
				<textarea className="textarea" id="msg" placaholder="Type A meassage" cols="100" onChange={this.onChange} onKeyUp={this.onKeyup}>
				</textarea>
			</form>
		)
	}

}


export default MessageBox