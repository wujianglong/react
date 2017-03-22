import React, { Component } from 'react';
import Wjl_doc from './wjl.docx';




export default class Edu extends Component{
	constructor(props){
		super(props)
		this.state={
			transform:'',
		}
	}
	move1(e){
    	var banner=e.target;
		var centerX = banner.offsetLeft + banner.offsetWidth / 2,
            centerY = banner.offsetTop + banner.offsetHeight / 2;        
        var deltaX = e.pageX - centerX,
            deltaY = e.pageY - centerY;
        var percentageX = deltaX / centerX,
            percentageY = deltaY / centerY;
        var deg = 10;
        this.setState({
        	transform:'rotateX(' + percentageY * -deg + 'deg)' + 'rotateY(' + percentageX * deg + 'deg)'
        })
        if(banner.id==1){
        	document.getElementById('er_wm').style.display='block';
        }
	}
	leave(e){
		this.setState({
        	transform:''
        })
        if(e.target.id==1){
        	document.getElementById('er_wm').style.display='none';
        }
	}

	handle(){
		var qq_chat = true;
		function show_qq() {
		    if (qq_chat) {
		        popwin = window.location.href = 'tencent://message/?uin=995527576&Site=伍江龙&Menu=yes'
		    }
		};
		setTimeout(show_qq, 1000);
	}
	
	render(){
		const {url,id,cli}=this.props;
		switch(id){
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;		
		}
		
		return (
					<a  href={id==3?Wjl_doc:null} download='伍江龙.doc' onClick={id==4?this.handle:''}>
				    <div id={id} className="banner1" style={{transform:this.state.transform,top:this.props.top}} onMouseMove={(e)=>{this.move1(e)}} onMouseLeave={(e)=>{this.leave(e)}}>{this.props.text}</div>
					</a>
			)
	}
}