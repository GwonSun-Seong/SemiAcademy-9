# Semiconductor Academy (반도체 아카데미)

반도체 기술 교육 및 시뮬레이션을 위한 웹 애플리케이션 프로젝트 공간입니다.

## 기술 스택
- **기술 스택**: HTML5, Vanilla CSS, JavaScript (React / ESM Import Maps)
- **컴파일러**: Babel Standalone (브라우저 내 JSX 컴파일)

## 실행 방법
1. 이 프로젝트 디렉토리에서 웹 서버를 구동합니다. (예: Python `http.server` 또는 Node.js `http-server` 등)
   - 동봉된 `start-server.ps1` 스크립트를 사용하여 파워쉘 환경에서 즉시 로컬 호스트(`http://localhost:8000`) 서버를 구동할 수 있습니다.
2. 브라우저로 `http://localhost:8000`에 접속합니다.

## 🔑 API 키 설정 (보안 및 배포)
이 프로젝트는 Google Gemini API를 사용하며, GitHub 업로드 시 개인 정보가 유출되지 않도록 다음과 같은 구조로 설계되었습니다.

1. **로컬 개발 시 (선택 사항)**:
   - `api-keys.example.js` 파일을 복사하여 `api-keys.js`를 만듭니다.
   - `api-keys.js` 내부에 본인의 API 키를 작성하고 개발하면 편리합니다.
   - `api-keys.js`는 `.gitignore`에 등록되어 있어 GitHub에 업로드되지 않습니다.
2. **웹사이트 배포 시 (GitHub Pages 등)**:
   - 개발자의 API 키는 배포용 소스코드에서 제거되어 커밋됩니다.
   - 사용자는 웹사이트에 접속한 후, 우측 사이드바(데스크톱) 또는 상단 헤더(모바일)의 **🔑 API 키** 버튼을 눌러 본인의 Gemini API 키를 직접 입력해 사용합니다. (입력된 키는 사용자의 브라우저 `localStorage`에만 저장되며 외부로 수집되지 않습니다.)
