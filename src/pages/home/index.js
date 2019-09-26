/**
 * @description: 产品说明书页面(品牌-产业)
 * @author: liulan
 * @update: complete by liulan 2019-09-10 17:30
 */
import React from 'react';
import { dataConfig } from '../../utils/constant';
import {Toast} from 'antd-mobile';
import './index.css';

export default class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			brandValue: 'Haier',
			branchValue: 'fridge',
			bannerImg:{
				backgroundImage:'url('+dataConfig.bannerImg.banner_three+')',
			},
			middleImg : {
				backgroundImage:'url('+dataConfig.middleContent.icon+')',
			},
			footer0 : dataConfig.footerContent.left[0],
			footer1 : {},
			footer2 : {}
		};
	}

	componentWillMount(){		
		// 获取url中的参数值:brand,branch
		let url=this.props.location.search;
		let arg=url.split("?")[1];
		let args=arg.split("&");
		let branchValue="";
		let brandValue="";
		let element= '';
		let key='';
		let value='';
		for (let index = 0; index < args.length; index++) {
		element = args[index];
		key=element.split("=")[0];
		value=element.split("=")[1];
		if(key === "branch"){
			this.setState({branchValue: value});
		}
		if(key === "brand"){
			this.setState({brandValue: value});
		}
		}
	 
		console.log('品牌：'+ brandValue + '----- 产业：'+ branchValue);
		
		// // 获取链接中的参数
		// let url=this.props.match.params;
		// // let url = window.location.search;
		// // let url=this.props;
		// console.log(url);
		// this.setState({brandValue: url.brand});
		// this.setState({branchValue: url.branch});		
	}

	componentDidMount(){
		console.log(this.state.brandValue +"----"+ this.state.branchValue);	
		// 根据品牌名区分banner图		
		// if(this.state.brandValue === 'Casarte'){
		// 	this.setState({bannerImg: {
		// 		backgroundImage:'url('+dataConfig.bannerImg.banner_two+')',
		// 	}});
		// }else if(this.state.brandValue === 'Tongshuai'){
		// 	this.setState({bannerImg: {
		// 		backgroundImage:'url('+dataConfig.bannerImg.banner_two+')',
		// 	}});
		// }else if(this.state.brandValue === 'Haier'){
		// 	this.setState({bannerImg: {
		// 		backgroundImage:'url('+dataConfig.bannerImg.banner_one+')',
		// 	}});
		// }
		for(let i=0;i<dataConfig.footerContent.middle.length;i++){
			console.log(dataConfig.footerContent.middle[i]);
			if(dataConfig.footerContent.middle[i].id === this.state.brandValue){
				this.setState({
					footer1:dataConfig.footerContent.middle[i]
				})
			}
			console.log(this.state.footer1);
		}

		for(let i=0;i<dataConfig.footerContent.right.length;i++){
			console.log(dataConfig.footerContent.right[i]);
			if(dataConfig.footerContent.right[i].id === this.state.branchValue){
				this.setState({
					footer2:dataConfig.footerContent.right[i]
				})
			}
		}
	}

	/**
	 * 打开各部分对应链接
	 * @param {String} url 链接
	 */
	openUrl(url){
		// 判断是否微信链接
		let curUrl = url;
		let domainUrl=curUrl.split("//")[1];
		let domain=domainUrl.split("/")[0];
		console.log('域名：'+ domain);
		if(domain==="mp.weixin.qq.com"){
			// 判断是否是微信环境
			let WxObj=window.navigator.userAgent.toLowerCase();
			if(WxObj.match(/microMessenger/i)==='micromessenger'){
				window.location.href= url
			}else{
				Toast.info('请在微信中打开',3);
			}
		}else {
			window.location.href= url
		}
	}

	/**
	 * 打开对应产业智家下载地址
	 * @param {String} branch 产业名称
	 */
	openDownloadUrl(branch){
		for(let i=0;i<dataConfig.footerContent.right.length;i++){
			if(dataConfig.footerContent.right[i].id === branch){
				window.location.href= dataConfig.footerContent.right[i].DownloadUrl
			}
		}
	}

	render () {
		const currentConfig = [this.state.footer0,this.state.footer1,this.state.footer2];
		return (
			<div className="totalContent">
				{/* <div style={{width:'100px',height:'100px',backgroundColor:'pink'}} onClick={()=>{this.test1()}}> 测试按钮</div> */}
				<img className='banner' alt="" style={this.state.bannerImg}/>
				<div className='middleContent'>
					<div className='middleLeft' onClick={()=>this.openDownloadUrl(this.state.branchValue)}>
						<i className="middleIcon" style={this.state.middleImg}></i>
						<div className='middleDownload'>
							{dataConfig.middleContent.iconTitle}
						</div>
					</div>
					<div className='middleRight'>
						<div style={{color:'cornflowerblue'}}>
							<h5 style={{fontSize:'1rem',fontWeight:'bold'}}>{dataConfig.middleContent.name}</h5>
							<h5 className='midRigTitle'>{dataConfig.middleContent.title}</h5>
						</div>
						{/* <div style={{color:'#999',fontSize:'.7rem',marginTop:'10px'}}>{dataConfig.middleContent.content}</div> */}
						<div className='midRigContent' style={{backgroundImage:'url('+dataConfig.middleContent.rightContent+')'}} ></div>
					</div>
				</div>
				<div className='footerContent'>
					{
						currentConfig.map((item, index) => (
							<div onClick={()=>this.openUrl(item.clickUrl)} className="footerArea">
								<i className="footerImg" style={{backgroundImage:'url('+item.icon+')'}}></i>
								<h5 style={{color:'#999',fontSize:'.7rem',marginTop:'10px'}}>{item.name}</h5>
								<p>{item.content_one}</p>
								<p>{item.content_two}</p>
							</div>
						))
					}
				</div>				
			</div>			
		);
		}
	}	
	

