# 카드 뒤집기 게임

바닐라 HTML/CSS/JS + Supabase로 만든 짝 맞추기 메모리 게임입니다.

## 실행 방법

### 실행 방법
- 탐색기에서 **index.html** 더블클릭하거나, Live Server로 **http://127.0.0.1:5500/index.html** 열기
- **게임 시작** 버튼을 누르면 카드가 나타남

### 그냥 브라우저에서 열기
- `index.html` 더블클릭하거나, 브라우저 주소창에 `file:///.../index.html` 입력

### 게임 진행
1. **게임 시작** 버튼 클릭 후 카드를 클릭해 같은 그림을 찾기
2. 클리어 후 닉네임 입력 → **기록 저장**으로 순위 등록

## 기술

- 프론트: HTML, CSS, JavaScript (CDN: Supabase JS)
- DB: Supabase `card_flip_scores` 테이블 (시도 횟수, 완료 시간 저장)

## Supabase

- 프로젝트: card-flip-game
- 테이블: `card_flip_scores` (player_name, moves, time_seconds, created_at)
- RLS: 익명 사용자도 점수 제출·순위 조회 가능
