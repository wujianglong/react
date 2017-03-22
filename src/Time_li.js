import React, { Component } from 'react';

export default class Time_li extends Component{
	constructor(props) {
        super(props);
    }
	render(){
		return (
				<ul className='edu_content'>
					{
						this.props.list1.map((msg,key)=>{
							return <li key={key}>{msg}</li>
						})
					}
				</ul>
			)
	}
}