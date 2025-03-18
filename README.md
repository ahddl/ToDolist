# 새로 추가한 기능
- 현재 날짜 출력
- 리스트 전체 삭제

  ![image](https://github.com/user-attachments/assets/1b7caced-6e89-4d57-a238-4011b87d0b0a)

## 현재 날짜 출력
📌 플로우 차트 단계
1. 시작(Start)
2. new Date()에서 현재 날짜 가져오기
3. 요일 배열(WEEKDAY)에서 현재 요일 가져오기
4. 연도, 월, 일, 요일을 조합하여 문자열 생성
5. today_h2.innerText를 이용해 날짜를 HTML에 출력
6. 종료(End)

## 리스트 전체 삭제
📌 플로우 차트 단계
1. 시작(Start)
2. eraseBtn(지우개 버튼)이 클릭되었는지 감지
3. items(ul) 내부의 자식 요소가 있는지 확인
4. (없음) → 5번으로 진행 (있음) → 6번으로 진행
5. "삭제할 목록이 없습니다." 경고 메시지 표시 후 종료
6. while 문을 사용하여 ul 내부의 모든 li 요소 삭제
7. 종료(End)
