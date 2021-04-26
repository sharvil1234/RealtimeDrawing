function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized!');
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be  " + difference + "px";
    fill('F90093');
    stroke('F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.x;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("nose X = " + noseX + "nose Y = " + noseY + "Difference = " + difference);
    }
}

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


