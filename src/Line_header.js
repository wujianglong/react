import React, { Component } from 'react';

export default class Line extends Component{
	constructor(props) {
        super(props);
        
    }
	render(){
		return (
				<div className="line_header">
					<p>{this.props.text}</p>
				</div>
			)
	}
}