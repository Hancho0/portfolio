import matplotlib.pyplot as plt

plt.rc('font', family='NanumBarunGothic')


연령대 = ['10-15', '16-20', '21-25', '26-30', '31-35', '36-40']
Z세대_옷 = ['스포티 캐주얼', '팝 컬처 패션', '스트리트 패션', '빈티지/레트로', '', '']
밀레니얼_옷 = ['', '', '캐주얼', '트렌디 오피스룩', '스마트 캐주얼', '캐주얼 비즈니스']

옷_유형 = {
    '스포티 캐주얼': 1,
    '팝 컬처 패션': 2,
    '스트리트 패션': 3,
    '빈티지/레트로': 4,
    '캐주얼': 5,
    '트렌디 오피스룩': 6,
    '스마트 캐주얼': 7,
    '캐주얼 비즈니스': 8
}

Z세대_숫자 = [옷_유형.get(item, 0) for item in Z세대_옷]
밀레니얼_숫자 = [옷_유형.get(item, 0) for item in 밀레니얼_옷]

fig, ax = plt.subplots(figsize=(12, 7))

ax.plot(연령대, Z세대_숫자, marker='o', linestyle='-', label='Z세대')
ax.plot(연령대, 밀레니얼_숫자, marker='s', linestyle='-', label='밀레니얼')

ax.set_xlabel('연령대')
ax.set_ylabel('인기 의류 유형 (숫자)')
ax.set_title('연령대별 인기 의류 유형 (Z세대 vs 밀레니얼)')
ax.set_xticks(range(len(연령대)))
ax.set_xticklabels(연령대)
ax.legend()

def label_add(연령대, 숫자, 라벨):
    for x, y, text in zip(연령대, 숫자, 라벨):
        if y != 0:
            ax.text(x, y, text, ha='center', va='bottom', fontsize=10)

label_add(range(len(연령대)), Z세대_숫자, Z세대_옷)
label_add(range(len(연령대)), 밀레니얼_숫자, 밀레니얼_옷)

plt.tight_layout()
plt.show()