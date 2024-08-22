# std-new_arreo-v1

New 아레오 프로젝트 (say015 기능 추가)

apis폴더

> api폴더 (api를 요청하고 응답만 받는 용도)   
> user.js (user관련 api 요청 함수들)   
> services (응답결과를 데이터를 정제 해주는 함수들)   
> post.js (post응답 값을 정제해줌 )   
> utils (공통적인 함수)

## 프로젝트 구조

``` 
src
├── apis               # api 관련 폴더, axios 사용
│   └── ...
├── utils              # 유틸 컴포넌트
│   └── ...
├── assets             # 첫 셋팅 시 사용한 스타일 css
│   └── ...
├── hooks              # 공통으로 사용할 수 있는 훅 저장
│   └── ...
├── components         # pages에 들어가는 컴포넌트들
│   ├── atom           # 재사용 가능한 가장 작은 단위 컴포넌트
│   │   └── ...
│   ├── Button         # Todo와 그 하위 컴포넌트에 사용한 Button 컴포넌트
│   │   └── ...
│   ├── Input          # Todo와 그 하위 컴포넌트에 사용한 Input 컴포넌트
│   │   └── ...
│   └── molecules      # atom을 조합하여 만든 컴포넌트
│       └── ...
└── pages              # 페이지 단위 컴포넌트
├── AddressBook    # 주소록 페이지
│   └── ...
└── Message        # 메세지 전송 결과 조회 페이지
└── ...
```

### 아토믹 디자인패턴 개념
- Atom: 이는 가장 기본적인 빌딩 블록으로서 버튼, 인풋 필드, 텍스트 등과 같이 독립적으로 사용할 수 없는 가장 작은 UI 요소들을 의미합니다.

- Molecule: 여러 개의 Atom을 결합하여 만든 비교적 간단한 UI 구성 요소입니다. 예를 들어 검색 폼(Molecule)은 텍스트 입력 필드(Atom)와 검색 버튼(Atom)으로 구성됩니다.

- Organism: 여러 Molecule 및 Atom이 결합된 복잡한 UI 구성 요소입니다. 예를 들어 헤더(Organism)는 로고(Atom), 네비게이션(Molecule), 검색 폼(Molecule) 등으로 구성됩니다.

- Template: Organism과 Molecule, Atom을 배치하여 전체 페이지의 레이아웃을 형성합니다. 실제 콘텐츠는 포함하지 않거나         placeholder로 대체되며 주로 페이지의 구조와 흐름을 보여줍니다.

- Page: Template에 실제 콘텐츠와 데이터가 채워진 상태입니다. 최종 사용자에게 보여지는 완성된 인터페이스입니다.

- Atom 또는 Molecule: Atom 또는 Molecule 컴포넌트가 자체적으로 독립적인 기능을 수행할 때 해당 컴포넌트 내에 이벤트 핸들러를 위치시킵니다. 예를 들어, 입력 필드에서 텍스트가 변경될 때 발생하는 이벤트나, 드롭다운 메뉴에서 옵션을 선택하는 이벤트 등이 여기에 해당합니다.

- Organism 또는 Page: 하지만, 어떤 동작이 여러 컴포넌트 간의 상호작용에 의해 발생하거나 전체 애플리케이션의 상태를 변경해야 하는 경우에는 보통 Organism 또는 Page 단계에서 이벤트 핸들러를 관리합니다. 예를 들어, 검색 폼(Molecule)의 '검색' 버튼(Atom)을 클릭하여 검색 쿼리를 실행하고 그 결과로 전체 페이지 내용(Page)을 업데이트하는 경우가 여기에 해당합니다.

따라서 질문하신 사항처럼 '검색' 버튼의 onClick 함수는 검색 쿼리 실행과 같은 애플리케이션 로직을 수행한다면 Organism 또는 Page 단계에서 관리되어야 합니다. 그런 다음 props로 하위 컴포넌트(Molecule 및 Atom)로 전달되어 실제 버튼 요소에 연결됩니다.
넵

### 깃 컨벤션

| 깃모지 | 코드 | 의미 | Type |
|:------:|:-----|:-----|:-----|
| 🎨 | `:art:` | 코드의 구조/형태 개선 | `refactor:` |
| ⚡️ | `:zap:` | 성능 개선 | `perf:` |
| 🔥 | `:fire:` | 코드/파일 삭제 | `remove:` |
| 🐛 | `:bug:` | 버그 수정 | `fix:` |
| 🚑 | `:ambulance:` | 긴급 수정 | `!HOTFIX:` |
| ✨ | `:sparkles:` | 새 기능 추가 | `feat:` |
| 📝 | `:memo:` | 문서 추가/수정 | `docs:` |
| 💄 | `:lipstick:` | UI/style 파일 추가/수정 | `design:` |
| 🎉 | `:tada:` | 프로젝트 시작 | - |
| 🔖 | `:bookmark:` | 릴리즈/버전 태그 | - |
| 📌 | `:pushpin:` | 특정 버전 의존성 고정 | - |
| ♻️ | `:recycle:` | 코드 리팩토링 | `refactor:` |
| ➕ | `:heavy_plus_sign:` | 의존성 추가 | `chore:` |
| ➖ | `:heavy_minus_sign:` | 의존성 제거 | `chore:` |
| 🔧 | `:wrench:` | 구성 파일 추가/삭제 | `chore:` |
| 🔨 | `:hammer:` | 개발 스크립트 추가/수정 | `chore:` |
| 💩 | `:poop:` | 똥싼 코드 | - |
| ⏪ | `:rewind:` | 변경 내용 되돌리기 | - |
| 🔀 | `:twisted_rightwards_arrows:` | 브랜치 합병 | - |
| 📦 | `:package:` | 컴파일된 파일 추가/수정 | `chore:` |
| 👽 | `:alien:` | 외부 API 변화로 인한 수정 | `fix:` |
| 🚚 | `:truck:` | 리소스 이동, 이름 변경 | `rename:` |
| 📄 | `:page_facing_up:` | 라이센스 추가/수정 | `docs:` |
| 💡 | `:bulb:` | 주석 추가/수정 | `comment:` |
| 🍻 | `:beers:` | 술 취해서 쓴 코드 | - |
| 🗃 | `:card_file_box:` | 데이터베이스 관련 수정 | `chore:` |
| 🔊 | `:loud_sound:` | 로그 추가/수정 | `chore:` |
| 🙈 | `:see_no_evil:` | .gitignore 추가/수정 | `chore:` |