
let calendar = null;
let date = new Date();
let year;
let month;
let day;

window.addEventListener("load", function(){
    fetch('astro.json')
    .then(response => response.json())
    .then(data => console.log(data.people))
    .catch(function(e){
console.log(e);
    });
});
let dailyInfo = function(year,month,day,imgPath){
    this.year = year;
    this.month= month;
    this.day= day;
    this.imgPath=imgPath;
};
let dailyInfoList = [];
$( document ).ready(function() {
    
    setDate();
    initializeDailyList();
    loadData();
});


function setDate(){
   
    year = date.getFullYear();
    month =('0' + (date.getMonth() + 1)).slice(-2);
    day = ('0' + date.getDate()).slice(-2);
    $("#date").text(year + '-' + month + '-' + day);
}


function initializeDailyList(){
    dailyInfoList.push(new dailyInfo("2022","09","18", 
    ["resource/p1.png","resource/p2.png","resource/p3.png"]));
    dailyInfoList.push(new dailyInfo("2022","09","19", 
    ["resource/p1.png","resource/p2.png"]));
    dailyInfoList.push(new dailyInfo("2022","09","20", 
    ["resource/p1.png"]));
   
}

function loadData(){
    $("#middle").empty();
    $("#middle").append("<div ></div>");
    $("#middle>div").append("<img class='middleImg' src='resource/backGroundWhite.png'>");
    for (let i = 0;i<dailyInfoList.length;i++){
        if (dailyInfoList[i].year == year &&
             dailyInfoList[i].month == month &&
              dailyInfoList[i].day == day){
                
                for (let j = 0;j<dailyInfoList[i].imgPath.length;j++)
                {
                    
                   
                $("#middle").append("<img class='middleImg' src="
                 + dailyInfoList[i].imgPath[j] + ">");
              }
    }
}
}