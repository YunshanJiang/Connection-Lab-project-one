
let calendar = null;
let date = new Date();
let year;
let month;
let day;
let jsonData;
window.addEventListener("load", function(){
    
});
let dailyInfo = function(year,month,day,imgPath){
    this.year = year;
    this.month= month;
    this.day= day;
    this.imgPath=imgPath;
};
let dailyInfoList = [];
$( document ).ready(async function() {
    
    setDate();
    jsonData = await initializeDailyList();
    loadData();
});


function setDate(){
   
    year = date.getFullYear();
    month =('0' + (date.getMonth() + 1)).slice(-2);
    day = ('0' + date.getDate()).slice(-2);
    $("#date").text(year + '-' + month + '-' + day);
}


async function initializeDailyList(){

    return fetch('./../data/image.json')
    .then(response => response.json())
    .then(data => data)
    .catch(function(e){
console.log(e);
    });
   
}

function loadData(){
    $("#middle").empty();
    $("#middle").append("<div ></div>");
    $("#middle>div").append("<img class='middleImg' src='resource/backGroundWhite.png'>");
    for (let i = 0;i<jsonData.dateData.length;i++){
        if (jsonData.dateData[i].year == year &&
            jsonData.dateData[i].month == month &&
            jsonData.dateData[i].day == day){
                
                for (let j = 0;j<jsonData.dateData[i].imgPath.length;j++)
                {
                    
                   
                $("#middle").append("<img class='middleImg' src="
                 + jsonData.dateData[i].imgPath[j] + ">");
              }
    }
}
}