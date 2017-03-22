import React, { Component } from 'react';
import Header from './Header';
import Line_header from './Line_header';
import Edu from './Edu';
import Time_li from './Time_li';
import Soft_dev from './Soft_dev';
import Banner from './Banner'
import Banner1 from './Banner1'

import Music_url from './music.mp3';

import Wjl_mp4 from './wjl.mp4';

import Er_jpg from './img/er_wm.jpg';

import Cs from './cs_babel';





// import Messagelist2 from './Messagelist2';

export default class App extends Component { //eslint-disable-line
  render() {
  	let arr1=['计算机语言：js,html5+css3,jQuery,swiper.js,zepto.js, 以及node.js php  sea.js require.js等运用. jquery扎实，熟悉主流Javascript类库及主流JS/CSS框架','前端框架：bootstrap,了解react,vue.js,angular,最近在研究react与redux,webpack node.js的项目！','前端框架：bootstrap,了解react,vue.js,angular,最近在研究react与redux,webpack node.js的项目！','编程软件： sublime,webstrom,hBuilder,以及常用软件ps等等！','兼容性：熟悉Google Chrome,IE，Firefox等多种浏览器的特性和兼容性，编写代码简洁，能够兼容各浏览器标准']
    return (
      <div className='main'>
        <Header/>
        <div className='banner'>
        		<Banner1 text='微信扫一扫' top='8%' id='1'/>
            <Banner1 text='项目地址' top='18%' id='2'/>
            <Banner1 text='简历下载' top='28%' id='3' />
            <Banner1 text='联系作者' top='38%' id='4' />
            
        </div>
        <div style={{position:'fixed',top:'0px',opacity:'.2',width:'100%'}}>
        <video style={{width:'100%'}} src={Wjl_mp4}  loop>
			  </video>
	      <audio src={Music_url}>
			  </audio>
        </div>
       
        <div className='main_content'>
        	<Line_header text='教育背景'/>
	        <Edu/>
	        <Line_header text='专业技能'/>
	        <Time_li list1={arr1} />


	        <Line_header text='软件研发经历'/>

	        <Soft_dev/>

	        <Line_header text='特长爱好'/>
	        <div className='tcah'>
  				<ul>
  					<li>
  						<span style={{}}>学习:</span><span>喜欢翻书，喜欢淘一些新技术的书来看,追求前沿的技术,懂得前端世界路还有很长的路要走，还有许多技术需要去加强。只有不断的学习才能丰富自己,为公司的发展也尽自己的一份力量。</span>
  					</li>
  					<li>
  						<span style={{}}>兴趣:</span><span>喜欢健身,跑步,爱看新闻,看书,听音乐。</span>
  					</li>
  					<li>
  						<span style={{}}>性格:</span><span>有吃苦耐劳精神,不抱怨,能够承担责任,主动学习,具有良好的团队协作精神，为人诚实可靠、品行端正、具有亲和力，较强的独立工作能力和公关能力。</span>
  					</li>
  					
  				</ul>
	        </div>
        </div>

        <Er_wm />
        

      </div>
    );
  }
}

class Er_wm extends Component{
  render(){
    return (
      <div className='er_wm' id='er_wm'>
        <img src={Er_jpg} alt="" />
      </div>
    )
  }
}
