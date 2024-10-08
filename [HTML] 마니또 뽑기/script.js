function generateSecretSanta() {

    const numinput = document.getElementById('CLASS_NAME');

    const people = [
        "박지영",
        "장진원",
        "강윤수",
        "김무진",
        "김호윤",
        "박경준",
        "박성진",
        "손태환",
        "송호철",
        "양선호",
        "오승주",
        "이기현",
        "이세민",
        "이태석"
    ];

    if (sessionStorage.getItem(`${numinput.value}`)) {
        const resultElement = document.getElementById("result");
        if (sessionStorage.getItem(`${numinput.value}`) === "박지영" || "장진원") {
            resultElement.innerHTML = `이미 마니또 뽑기 완료했습니다. 마니또 : ${sessionStorage.getItem(`${numinput.value}`)}쌤`;
        } else
            resultElement.innerHTML = `이미 마니또 뽑기 완료했습니다. 마니또 : ${sessionStorage.getItem(`${numinput.value}`)}`;
    } else if (numinput.value === "초기화") {
        sessionStorage.clear();
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `세션이 초기화 되었습니다.`;
    } else if (!people.includes(`${numinput.value}`)) {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `존재하지 않는 이름입니다.`;
    } else {
        const MAX = people.length;
        let secretSanta = null;
        let isUnique = false;


        while (!isUnique) {
            let tmp = Math.floor(Math.random() * MAX);
            secretSanta = people[tmp];

            if (secretSanta === numinput.value) {
                continue;
            }

            isUnique = true;

            for (let i = 0; i < MAX; i++) {
                if (sessionStorage.getItem(people[i]) === secretSanta) {
                    isUnique = false;
                    break;
                }
            }
        }


        const resultElement = document.getElementById("result");
        if (secretSanta === "박지영" || "장진원") {
            resultElement.innerHTML = `<p>당신의 마니또는... ${secretSanta}쌤 입니다</p>`;
            sessionStorage.setItem(`${numinput.value}`, `${secretSanta}`);
        }
        resultElement.innerHTML = `<p>당신의 마니또는... ${secretSanta} 입니다</p>`;
        sessionStorage.setItem(`${numinput.value}`, `${secretSanta}`);
    }

}

function downloadResults() {
    let results = "";
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        results += `${key}의 마니또는 ${value}\n`;
        results += `\n`;
        results += `\n`;
    }

    const blob = new Blob([results], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "마니또 결과.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}