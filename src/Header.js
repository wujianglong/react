import React, { Component, PropTypes } from 'react';
import wjl_png from './img/wjl.png'

export default class Header extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    return (
      <div className='header'>
         <div className='header_content'>
             <div className='header_l'>
                  <h2>伍江龙</h2>
                  <p>web前端工程师</p>  
                  <p>15170037957</p>
                  <p>995527576@qq.com</p>
             </div>
             <div className='header_r'>
                <img src={wjl_png} />
             </div>
         </div>
      </div>
    );
  }
}
