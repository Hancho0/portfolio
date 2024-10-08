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

function register() {
    const DBA = db.collection('teacher_info').doc('register_code');
    const code = document.getElementById("CODE")

    DBA.get().then((doc) => {
        if (doc.data().code != code.value) {
            alert("인증코드가 올바르지 않습니다.");
        } else {
            const idinput = document.getElementById('ID').value;
            const passwordinput = document.getElementById('PASSWORD').value;
            const name = document.getElementById("NAME").value

            const REGISTER = db.collection('teacher_info');

            const newData = {
                id: idinput,
                password: passwordinput,
                name: name,
            };
            REGISTER.add(newData)
            alert("등록 완료");
            setTimeout(() => location.href = "login.html", 1000);
        }
    })

}


