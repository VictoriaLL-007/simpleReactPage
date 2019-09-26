import UplusApi from '@uplus/uplus-api';

const uplusApi = new UplusApi();

uplusApi.initDeviceReady().then(()=>{
  uplusApi.upTraceModule.initObserveRequest({
    pageName: 'http://www.baidu.com',
    observeUrls: [{
      url: 'http://www.baidu.com/',
      // method: 'get',
    }]
  })

  uplusApi.upTraceModule.reportPageClickEvent({actionCode:'Italian_chocolate',extentInfo:{'uplusAttr':'advanceAttr'}}).then((result) => {
      console.log('result2',result);
    },(err)=>{
       console.log('err2',err); 
    })
});


export function trace() {

// uplusApi.upTraceModule.initObserveRequest({
//   pageName: 'http://192.168.43.145:3000/#/',
//   observeUrls: [{
//     url: 'http://192.168.43.145:3000/#/',
//     method: 'get',
//   }]
// })

// uplusApi.upTraceModule.reportSelfPageChange({type:'GOTO',selfPageUrl:'http://192.168.43.145:3000/#/',selfPageTitle:'uplus' }).then((result) => {
//   console.log('result',result);
// },(err)=>{
//    console.log('err',err); 
// })

// uplusApi.upTraceModule.reportPageClickEvent({actionCode:'advance',extentInfo:{'uplusAttr':'advanceAttr'}})

}
 
/**
 *打开摄像机
 */

export function openit() {
  
 // return uplusApi.upVideoRecorderModule.open({camera:'back'});
 uplusApi.upVideoRecorderModule.open({
  rect: {
    x: 10,
    y: 10,
    w: 300,
    h: 400
  },
  quality: '1080p',
  // orientation:'right',
  saveToAlbum: true,
  // fixedOn:'video',
  save: {
    path: 'fs://video',
    name: 'my',
    type: 'mpeg4'
  },
  camera: 'back'
}).then((result) => {
  console.log('result',result);
  uplusApi.upVideoRecorderModule.start({timer:10});
  setTimeout(()=>{
    console.log('准备隐藏')
		uplusApi.upVideoRecorderModule.hide();
  },11000);
},(err)=>{
   console.log('err',err); 
})

}

/**
 *打开摄像机
 */

export function close() {
  
  // return uplusApi.upVideoRecorderModule.open({camera:'back'});
  uplusApi.upVideoRecorderModule.close();
 
 }

 /**
 *打开摄像机
 */

export function start() {
  
  // return uplusApi.upVideoRecorderModule.open({camera:'back'});
  uplusApi.upVideoRecorderModule.start({timer:10});
 
 }

 /**
 *打开摄像机
 */

export function addEventListener() {
  
  // return uplusApi.upVideoRecorderModule.open({camera:'back'});
  uplusApi.upVideoRecorderModule.addEventListener();
 
 }

 /**
 *打开摄像机
 */

export function hide() {
  
  // return uplusApi.upVideoRecorderModule.open({camera:'back'});
  uplusApi.upVideoRecorderModule.hide();
 
 }



/* 打开照片 */
export function pickImage() {
  
  console.log('let us start');
    return uplusApi.upImageModule.imagePicker({})
}

/**
 * 关闭相册浏览 
 */
export function closePicker(){
  // uplusApi.initDeviceReady();
  return uplusApi.upImageModule.closePicker()
}

/**
 * 打开相机
 */
export function openCamera() {
	uplusApi.initDeviceReady();
  return uplusApi.upImageModule.openCamera({destinationType:2});
}

/**
 *保存图片
 */
export function saveImages() {
	uplusApi.initDeviceReady();
  return uplusApi.upImageModule.saveImages({images: ['data:image/png;base64,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']})
}

/**
 *转换路径
 */
export function transPath(a) {
	uplusApi.initDeviceReady();
  return uplusApi.upImageModule.transPath({path:a})
}






/**
 *goTopage
 */
export function goToPage() {
	uplusApi.initDeviceReady();
  return uplusApi.upVdnModule.goToPage({url:'https://www.baidu.com'});
}
/**
 *goBack
 */
export function goBack() {
	uplusApi.initDeviceReady();
  return uplusApi.vdnModule.goBack();
}
/**
 *goTopage
 */
export function goToPageForResult() {
	uplusApi.initDeviceReady();
  return uplusApi.vdnModule.goToPageForResult({url:'https://baike.baidu.com/item/%E5%B7%A7%E5%85%8B%E5%8A%9B/69266?fr=aladdin'});
}
/**
 *goTopage
 */
export function goBackWithResult() {
	uplusApi.initDeviceReady();
  return uplusApi.vdnModule.goBackWithResult({result:'nihao'});
}

