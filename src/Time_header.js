import React, { Component } from 'react';

export default class Time_header extends Component{
	constructor(props) {
        super(props);
    }
	render(){
		return (
			<ul className="edu_header">
				{
					this.props.list.map((msg,key) => {
						return <li key={key}>{msg}</li>
					})
			    }
			</ul>
			)
	}
}