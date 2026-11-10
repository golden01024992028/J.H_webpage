MUNG’s 포트폴리오 - GitHub Pages 배포 안내

[구성]
index.html : 웹페이지 본문
style.css  : 디자인 및 반응형 레이아웃
script.js  : 모바일 메뉴, 상단 이동, 링크 안내
assets/    : 이미지 파일

[내 PC에서 미리보기]
1. ZIP 파일을 압축 해제합니다.
2. MUNG_Portfolio_Website 폴더 안의 index.html을 더블 클릭합니다.
3. 브라우저에서 화면과 링크를 확인합니다.

[연락처 링크 수정]
index.html을 메모장 또는 VS Code로 엽니다.
- YOUR_EMAIL@example.com 을 실제 이메일 주소로 바꿉니다.
- Instagram과 KakaoTalk의 href="#" 부분을 실제 프로필/채널 주소로 바꿉니다.
- Privacy Policy와 Terms of Service는 정책 페이지를 준비한 뒤 링크를 연결합니다.
현재 개인 연락처를 임의로 만들지 않았으며, 미입력 링크는 안내 메시지를 표시합니다.

[GitHub Pages 배포]
1. GitHub에서 새 Repository를 만듭니다. 예: mung-portfolio
2. 압축을 푼 폴더 안의 index.html, style.css, script.js, assets 폴더, README.txt를 저장소 최상위(root)에 업로드합니다.
   중요: index.html이 저장소 최상위에 있어야 합니다.
3. 저장소의 Settings > Pages로 이동합니다.
4. Build and deployment에서 Deploy from a branch를 선택합니다.
5. Branch는 main, 폴더는 /(root)를 선택하고 Save를 누릅니다.
6. 배포가 완료되면 표시되는 Pages 주소로 접속합니다.

[프로젝트 경로 호환]
CSS, JavaScript, 이미지 주소는 모두 ./ 또는 ./assets/ 상대 경로로 작성했습니다.
따라서 https://계정명.github.io/저장소명/ 형태의 프로젝트 사이트에서도 파일 경로가 유지됩니다.
외부 프레임워크, 빌드 도구, 서버, 데이터베이스, API 키는 사용하지 않았습니다.


[TOOLS 아이콘 업데이트]
TOOLS 영역에는 사용자가 제공한 원본 PNG 아이콘 8종(Photoshop, Illustrator, Premiere Pro, After Effects, Figma, Notion, Filmora, CapCut)을 적용했습니다. 아이콘 파일은 assets/tools/ 폴더에 있습니다.
[최근 버튼 이미지 적용]
- HOME / THINGS / CONNECT 메뉴에는 첨부한 멍뭉이 얼굴 아이콘을 적용했습니다.
- 프로젝트 GO 버튼에는 첨부한 원형 GO 이미지를 적용하고, 마우스를 올리면 호버 이미지로 전환됩니다.
- NEXT 기본형/호버형 이미지도 assets/buttons 폴더에 포함되어 있습니다.


[동영상 파일 안내]
THINGS 영역의 프리미어프로 카드에는 assets/videos/premiere-starbucks.mp4, 애프터이펙트 카드에는 assets/videos/after-effects-dodram.mp4가 연결되어 있습니다. 영상은 음소거 자동재생·반복재생·인라인 재생을 지원하며, 재생 컨트롤로 직접 조작할 수 있습니다. GitHub 저장소에 업로드할 때 두 MP4 파일도 반드시 assets/videos 폴더 경로 그대로 포함하세요. 각 영상은 100MB 미만이므로 GitHub 일반 파일 제한 내에 있으나, 웹 브라우저 업로드의 파일 크기 제한에 걸리면 GitHub Desktop 또는 git 명령줄로 업로드하세요.
