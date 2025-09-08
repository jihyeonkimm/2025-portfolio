# 🚀 Jihyeon Kim Portfolio

프론트엔드 개발자 김지현의 포트폴리오 웹사이트입니다.

## 🛠 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Styled Components
- **Database**: Firebase Firestore
- **Deployment**: Vercel
- **Other**: Lottie React, React Device Detect

## ✨ 주요 기능

### 🏠 메인 섹션

- 인터랙티브한 텍스트 애니메이션
- 반응형 디자인으로 모바일 최적화

### 👤 About 섹션

- 스크롤 기반 애니메이션
- 자기소개 및 핵심 가치 표현

### 💼 Projects 섹션

- **Intercept Route 모달**: Next.js App Router의 intercepting routes를 활용한 프로젝트 상세 모달
- **동적 이미지 로딩**: 기술 스택별 로고 자동 매칭
- **Firebase 연동**: 실시간 프로젝트 데이터 관리

### 📱 반응형 디자인

- 모바일 최적화 네비게이션
- 디바이스별 최적화된 UI/UX

## 🏗 프로젝트 구조

```
src/
├── app/
│   ├── @modal/                    # Parallel routes for modals
│   ├── _common/                   # 공통 컴포넌트
│   │   ├── components/            # 재사용 가능한 컴포넌트
│   │   └── assets/               # 아이콘, 이미지 등
│   ├── _modules/                 # 페이지별 모듈
│   │   ├── section/              # 섹션 컴포넌트
│   │   └── project/              # 프로젝트 관련 컴포넌트
│   ├── api/                      # API Routes
│   ├── hooks/                    # 커스텀 훅
│   └── data/                     # 정적 데이터
└── lib/                          # 라이브러리 설정
```

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

모든 디바이스에서 최적화된 사용자 경험을 제공합니다.

---

**Built with ❤️ by Jihyeon Kim**
