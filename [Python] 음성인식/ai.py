import speech_recognition as sr
from gtts import gTTS
import playsound
import os

# 음성 인식 객체 생성
recognizer = sr.Recognizer()

def 인식_하기():
    with sr.Microphone() as source:
        print("말씀하세요!")
        audio = recognizer.listen(source)

        try:
            text = recognizer.recognize_google(audio, language="ko-KR")
            print("인식된 텍스트:", text)
            return text
        except sr.UnknownValueError:
            print("음성을 인식할 수 없습니다.")
            return ""
        except sr.RequestError as e:
            print("음성 인식 서비스에 접근할 수 없습니다; {0}".format(e))
            return ""

def 대답_하기(text):
    tts = gTTS(text=text, lang='ko')
    filename = "response.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

def 응답_생성(input_text):
    input_text = input_text.lower()
    if "안녕" in input_text:
        return "안녕하세요! 무엇을 도와드릴까요?"
    elif "날씨" in input_text:
        return "오늘의 날씨는 맑음입니다. 기온은 25도입니다."
    elif "이름" in input_text:
        return "저는 AI 비서입니다. 당신의 이름은 무엇인가요?"
    elif "종료" in input_text:
        return "프로그램을 종료합니다."
    else:
        return "죄송해요, 무슨 말인지 잘 모르겠어요."

if __name__ == "__main__":
    while True:
        command = 인식_하기()
        if command:
            response = 응답_생성(command)
            대답_하기(response)
            if "종료" in command:
                break
