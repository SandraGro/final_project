import React from 'react';


/*function Login(props) {
    return (
        <div>
            {props.name}
        </div>
    );
}*/

/*
const Login =  (props) =>{
      return (
        <div>
            {props.name}
        </div>
    );
}
*/

/*
const Login =  ({name}) =>(
    return (
      <div>
          {name}
      </div>
  );
*/

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            name: this.props.name,
        };
        this.changeClicked = this.changeClicked.bind(this);
    }
    changeClicked(event) {
        console.log(event.target);
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <div onClick={this.changeClicked}>
                {this.state.name}
                <br/>
                {this.state.clicked.toString()}
            </div>
        )
    }
}

export default Login;
