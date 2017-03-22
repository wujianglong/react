import React, { Component } from 'react';
import Time_header from './Time_header';
import Time_li from './Time_li';


export default class Soft extends Component{
	constructor(props) {
        super(props);
    }
	render(){

		let arr1=['2016.8 - 2017.3','上海柯林布瑞信息技术有限公司','职位','前端工程师']
		let arr2=['2015.10 - 2016.5','北京和创未来有限公司（优分期）','职位','实习前端工程师']
		let arr3=['2015.8 - 2015.9','在校期间模仿蚂蜂窝旅游网','职位','程序员']
		let arr4=['2015.7 - 2015.8','艺龙旅游网模仿','职位','程序员']

		let arr_1=['MDM系统主数据管理（MDM Master Data Management）客户域使用客户数据集成（CDI），产品数据使用产品信息管理（PIM）;基础功能模块有：添加,删除,编辑,修改,界面DOM元素的拖拽等等。（运用到的技术有css3,bootstrap,gulp,sass,jquery-ui后台语言是.net）','参与公司前端工程师对公司产品及界面的持续优化与重构！']
		let arr_2=['公司移动端app与PC端活动页面制作！效果实现！H5活动页面运用到的技术有swiper,zepto.js,canvas等！','app首页预览项目！项目运用的技术有fis3.node.js sea.js require.js handlebar git ajax bootstrap,项目运行供公司内部产品使用。服务器交给node.js渲染,前端用require按需加载js,界面运用handlebar模板引擎！前端自动化流程构建选用的是百度的fis,后台是java,版本控制器为git.前后共开发时间花费2个月完成.由产品通过项目生成界面达到满意的效果,通过管理员同意再发布到线上！']
		let arr_3=['负责设计网站的功能构架图，以及网站页面的设计、布局','运用的技术纯手动js制作,页面轮播效果交互都是自己完成！','负责开发首页的效果设计以及前端代码的编写，以及网站各个网页开发完后合并工作，网站地址www.wujianglong.com.cn']
		let arr_4=['通过这次课程设计，掌握了一些兼容处理问题']

		return (
                <div className='soft_dev'>
                	<Time_header list={arr1}/>
                	<Time_li list1={arr_1}/>
                	<Time_header list={arr2}/>
                	<Time_li list1={arr_2}/>
                	<Time_header list={arr3}/>
                	<Time_li list1={arr_3}/>
                	<Time_header list={arr4}/>
                	<Time_li list1={arr_4}/>
                </div>
			)
	}
}