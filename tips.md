链接：https://www.zhihu.com/question/345343120/answer/821098064

<label>照相机</label> <input type="file" id='image' accept="image/*" capture='camera'> <br> <label>摄像机</label> <input type="file" id='video' accept="video/*" capture='camcorder'>
<input type="file" id="file" multiple>

在各个机型都可以点击 file 调用相册 和 摄像头拍照 
1. 在老版本的安卓中，必须加上capture，否则只能调用相册 
2. 在IOS中 加了capture，就只能调用摄像头不能调用相册
判断ios，如果是ios就去掉capture属性.
let info=navigator.userAgent.toLowerCases();
if(info.match(/iPhone\sOS/i)){
　　dom.removeAttribute("capture")　　
　　}
 
读取图片(fileChoose即为input)
fileChoose.change=()=>{
　　let file=fileChoose.files[0],
　　reader=new FileReader();
　　reader.onLoad=()=>{
　　　　img.src=reader.result
　　};
　　reader.readAsDataURL(file)
}