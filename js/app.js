
let calendar = null;
let date = new Date();
let year;
let month;
let day;
let reminderJsonData;
let userName;
let remindTexts;
window.addEventListener("load", function(){
    
});
let dailyInfo = function(year,month,day,imgPath){
    this.year = year;
    this.month= month;
    this.day= day;
    this.imgPath=imgPath;
};
let dailyInfoList = [];
$(document).ready(async function() {
    
    setDate();
    reminderJsonData = await initializeDailyList();
    loadData();
});


function setDate(){
   
    year = date.getFullYear();
    month =('0' + (date.getMonth() + 1)).slice(-2);
    day = ('0' + date.getDate()).slice(-2);
    $("#date").text(year + '-' + month + '-' + day);
}


async function initializeDailyList(){

    return fetch('https://yunshanjiang.github.io/Connection-Lab-project-one/data/reminder.json')
    .then(response => response.json())
    .then(data => data)
    .catch(function(e){
console.log(e);
    });
   
}

function loadData(){
    $("#middle").empty();
    $("#middle").append("<div ></div>");
    $("#middle>div").append(
        "<p id='reminder'>Reminder</p><div id='reminderTextDiv'><p2 id='reminderText'></p2></div>"
        );
        userName = localStorage.getItem("Uname");
        for (let i = 0;i<reminderJsonData.userReminds.length;i++)
        {
            console.log(reminderJsonData);
            if (reminderJsonData.userReminds[i].username==userName)
                remindTexts = reminderJsonData.userReminds[i].remindText;
        }
        
        //console.log(remindTexts);
    for (let i = 0;i<remindTexts.length;i++){
        if (remindTexts[i].year == year &&
            remindTexts[i].month == month &&
            remindTexts[i].day == day){
               
                $("#reminderText").text(remindTexts[i].text);
                
    }
}
}