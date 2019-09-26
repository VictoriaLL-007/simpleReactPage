import aircondition from '../assets/images/aircondition.jpg';
import banner from '../assets/images/banner.jpg';
import bannerPlus from '../assets/images/bannerPlus.jpg';
import bannerNew from '../assets/images/bannerNew.png';
import rightPart from '../assets/images/rightPart.png';
import connect from '../assets/images/connect.png';
import dishwasher from '../assets/images/dishwasher.png';
import fridge from '../assets/images/fridge2.png';
import smartHome from '../assets/images/smartHome.png';
import Haier from '../assets/images/Haier.png';
import hFriend from '../assets/images/hFriend.png';
import kitchen from '../assets/images/kitchen.png';
import security from '../assets/images/security.png';
import toilet from '../assets/images/toilet.png';
import Tongshuai from '../assets/images/ts.png';
import washmachine from '../assets/images/washmachine.png';
import waterheater from '../assets/images/waterheater.png';
import Casarte from '../assets/images/casarte.png';

export const dataConfig ={
	bannerImg:{
		"banner_one": banner,
		'banner_two': bannerPlus,
		'banner_three': bannerNew,
	},
	middleContent:{
		'icon': smartHome,
		"name":'海尔智家APP',
		'iconTitle':'点击下载',
		'title':'原海尔优家APP全面升级',
		'rightContent':rightPart,
		'content':'互联网时代三大核心平台级入口之一，集网器交互控制、场景定制体验、生态体验及社群交互等四大核心功能于一身，为用户提供物联网时代美好定制生活体验',
	},
	footerContent:{
		left:[
			{
				'icon':hFriend,
				'name':'海知友',
				'content_one':'海尔互联网',
				'content_two':'用户服务平台',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5ODAzODIwMA==&scene=124#wechat_redirect'
			}
		],
		middle:[
			{
				'icon':Casarte,
				'id':'Casarte',
				'name':'卡萨帝官网',
				'content_one':'国际高端家电品牌',
				'content_two':'发现生活 为爱进取',
				'clickUrl':'http://casarte.com'
			},
			{
				'icon':Haier,
				'id':'Haier',
				'name':'海尔官网',
				'content_one':'打造智慧家庭',
				'content_two':'定制美好生活',
				'clickUrl':'http://m.haier.com'
			},
			{
				'icon':Tongshuai,
				'id':'Tongshuai',
				'name':'统帅官网',
				'content_one':'轻时尚家电开创者',
				'content_two':'轻时尚 悠生活',
				'clickUrl':'http://tongshuai.com'
			}
		],
		right:[
			{
				'icon':connect,
				'id':'connect',
				'name':'智能互联',
				'content_one':'海尔互联网',
				'content_two':'用户服务平台',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5ODAzODIwMA==&scene=124#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=35&sourceName=%E6%99%BA%E8%83%BD%E4%BA%92%E8%81%94&newCampaign=1'
			},
			{
				'icon':security,
				'id':'security',
				'name':'安住生活',
				'content_one':'海尔智能家居',
				'content_two':'用户交互平台',
				'clickUrl':'http://www.haiershequ.com:7531/app/download/index.html',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=41&sourceName=%E5%AE%89%E9%98%B2&newCampaign=1'
			},
			{
				'icon':fridge,
				'id':'fridge',
				'name':'馨小厨',
				'content_one':'关注微信公众号',
				'content_two':'开启健康品质生活',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MTA4OTM3MA==&scene=124#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=3&sourceName=%E5%86%B0%E7%AE%B1%E6%B8%A0%E9%81%93&newCampaign=1'
			},
			{
				'icon':toilet,
				'id':'toilet',
				'name':'海尔智能马桶盖',
				'content_one':'关注微信公众号',
				'content_two':'智享健康生活',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MzM5MDA1NA==&scene=126#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=35&sourceName=%E6%99%BA%E8%83%BD%E4%BA%92%E8%81%94&newCampaign=1'
			},
			{
				'icon':waterheater,
				'id':'waterheater',
				'name':'海尔热水器',
				'content_one':'海尔智慧用水',
				'content_two':'全屋解决方案',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5ODE4NjkxOQ==&scene=126#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=9&sourceName=%E7%83%AD%E6%B0%B4%E5%99%A8%E6%B8%A0%E9%81%93&newCampaign=1'
			},
			{
				'icon':washmachine,
				'id':'washmachine',
				'name':'海尔智能洗衣机',
				'content_one':'海尔互联网',
				'content_two':'用户服务平台',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5ODEyNTkyNg==&scene=124#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=11&sourceName=%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B8%A0%E9%81%93&newCampaign=1'
			},
			{
				'icon':dishwasher,
				'id':'dishwasher',
				'name':'冰箱',
				'content_one':'海尔互联网',
				'content_two':'用户服务平台',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI1NTEyMzM5OQ==&scene=124#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=11&sourceName=%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B8%A0%E9%81%93&newCampaign=1'
			},
			{
				'icon':kitchen,
				'id':'kitchen',
				'name':'海尔智慧厨房',
				'content_one':'关注微信公众号',
				'content_two':'开启智慧生活',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NjI5NjkxNw==&scene=126#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=13&sourceName=%E5%8E%A8%E7%94%B5%E6%B8%A0%E9%81%93&newCampaign=1'
			},
			{
				'icon':aircondition,
				'id':'aircondition',
				'name':'海尔智能空调',
				'content_one':'关注微信公众号',
				'content_two':'智享更多服务',
				'clickUrl':'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTE2MjEzMg==&scene=126#wechat_redirect',
				'DownloadUrl':'http://resource.haier.net/download/oms/register/index.html?type=1&sku=default&xh=default&ProductId=default&sourceOptId=7&sourceName=%E7%A9%BA%E8%B0%83%E6%B8%A0%E9%81%93&newCampaign=1'
			},
		
		]
	}
}
