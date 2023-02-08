function preload () {

}
function setup () {
    canvas = creatCanvas (640, 480);
    canvas.position(110, 250);
    canvas = creatCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    tint_color = "";
}
function gotPoses (results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
function draw () {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function take_snapshot () {
    save ('myFilterImage.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
