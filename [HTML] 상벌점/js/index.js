const firebaseConfig = {
    apiKey: "AIzaSyCs3ZL0ol-H_8LEWHbeJB1L2vkNE9fOwEo",
    authDomain: "kyeryong-rewards.firebaseapp.com",
    projectId: "kyeryong-rewards",
    storageBucket: "kyeryong-rewards.appspot.com",
    messagingSenderId: "921121551619",
    appId: "1:921121551619:web:ca1ba633896730495da536",
    measurementId: "G-7H5WG75HNY"
};

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var cookie = document.cookie;

var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 1 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

var getCookie = function (name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

var deleteCookie = function (name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

var NAME = getCookie("KY_Name");
var TEAM = getCookie("KY_Team");

function logout() {
    deleteCookie("KY_Name");
    deleteCookie("KY_Login");
    alert("로그아웃 되었습니다.")
    location.href = "index.html";
}

function setting() {
    if (TEAM != "생활안전부") {
        alert("접근이 불가능합니다.")
    } else {
        location.href = "setting.html";
    }
}

$(document).ready(function () {
    var login_access = getCookie("KY_Login");
    var cookie_a = cookie.indexOf("KY_Login")
    if (cookie_a != -1) {
        if (login_access == "true") {
            document.querySelector(".name").innerHTML=`${NAME} 선생님`;
            document.querySelector(".job").innerHTML=`부서 : ${TEAM}`;
        }
    } else {
        alert("로그인이 필요합니다.");
        location.href = "login.html";
    }
});