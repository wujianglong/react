import React, { Component } from 'react';

export default class Banner extends Component{
	constructor(){
		super();
		this.move=this.move.bind(this);
		this.leave=this.leave.bind(this);
		this.state={
			color:'yellow',
			transform:''
		}
	}
	move(e){
		var banner=e.target;
		var centerX = banner.offsetLeft + banner.offsetWidth / 2,
            centerY = banner.offsetTop + banner.offsetHeight / 2;        
        var deltaX = e.pageX - centerX,
            deltaY = e.pageY - centerY;
        var percentageX = deltaX / centerX,
            percentageY = deltaY / centerY;
        var deg = 10;
        this.setState({
        	color:'green',
        	transform:'rotateX(' + percentageY * -deg + 'deg)' + 'rotateY(' + percentageX * deg + 'deg)'
        })
	}
	leave(){
		console.log('离开')
	}
	render(){
		return (
 				<div className='banner_c' style={{color:this.state.color,transform:this.state.transform,}} onMouseMove={(e)=>{this.move(e)}} onMouseLeave={this.leave}>
 					<p>
 						{this.props.text}
 					</p>
 				</div>
			)
	}
}