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

## Supabase 설정 (키 분리)

- **실제 키는 저장소에 올리지 않습니다.** `config.js`는 `.gitignore`에 포함되어 있습니다.
- **로컬 개발**: `config.example.js`를 복사해 `config.js`로 저장한 뒤, Supabase 대시보드(Project Settings > API)에서 URL과 anon key를 복사해 넣으세요.
- **Vercel 배포**: 프로젝트 Settings > Environment Variables에 다음을 추가하세요.
  - `SUPABASE_URL` = Supabase 프로젝트 URL
  - `SUPABASE_ANON_KEY` = anon (public) key  
  Build Command는 `npm run build` 로 두면 배포 시 `config.js`가 자동 생성됩니다.

## Supabase

- 프로젝트: card-flip-game
- 테이블: `card_flip_scores` (player_name, moves, time_seconds, created_at)
- RLS: 익명 사용자도 점수 제출·순위 조회 가능
