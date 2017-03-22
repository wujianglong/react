import React, { Component } from 'react';
import Time_header from './Time_header';
import Time_li from './Time_li';

export default class Edu extends Component{
	render(){
		let list_arr=['2012.09-2016.06','江西农业大学','软件工程','本科'];
		let list_arr1=['奖学金:学习优秀奖学金二等奖','英语水平:大学英语四级'];
		return (
                <div className='edu'>
                		<Time_header list={list_arr}/>
                		<Time_li list1={list_arr1}/>
                </div>
			)
	}
}