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


const idinput = document.getElementById('ID');
const passwordinput = document.getElementById('PASSWORD');

$(document).keyup(function(event) {
    if (event.which === 13) {
        login();
    }
});
function login() {
    db.collection('teacher_info').get().then((a) => {
        let idExists = false; // 아이디가 존재하는지 여부를 저장하기 위한 변수

        a.forEach((doc) => {
            if (idinput.value == doc.data().id) {
                idExists = true; // 아이디가 존재함을 표시
                if (passwordinput.value == doc.data().password) {
                    setCookie("KY_Login", "true", 1);
                    setCookie("KY_Name", `${doc.data().name}`, 1);
                    setCookie("KY_Team", `${doc.data().team}`, 1);
                    location.href = "index.html";
                    
                } else {
                    alert("비밀번호가 틀렸습니다.");
                    deleteCookie("KY_Login");
                }
            }
        });

        if (!idExists) {
            alert("존재하지 않는 아이디 입니다.");
            deleteCookie("KY_Login");
        }
    });
}
