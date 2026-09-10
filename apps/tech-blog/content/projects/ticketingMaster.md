---
id: ticketingMaster
title: Ticketing Master
description: 대기열 과부화에 초점을 맞춘 티켓팅 플랫폼 프로젝트
thumbnail: /images/ticketing_1.png
---
## 링크
- GitHub: [티켓팅 마스터](https://github.com/MLP-Ticketing-Master/ticketingMaster)

<br><br>

## 🖥️ 프로젝트 소개
멀티캠퍼스 현대이지웰 Java 풀스택 개발자 아카데미(7회차)에서 진행한 팀 프로젝트로써, 대기열 폭주 상황을 해결하는 기술적 방안에 집중한 티켓팅 플랫폼 프로젝트이다.
<img width="1000" alt="티켓팅마스터" src="https://github.com/user-attachments/assets/d77d36d0-8849-47f0-b344-8df2d7ade90c" /> 

<br>

<h3>
🏷️ Redis 대기열 · 낙관적 락 기반 e스포츠 티켓 예매 플랫폼
</h3>

<br>

<blockquote>

📅 <b>개발 기간</b> : 2026.04.22 ~ 2026.06.24

👥 <b>개발 인원</b> : 3명 (Full Stack)

🚀 <b>배포 환경</b> : AWS EC2 · Docker Compose

🔗 <b>배포 URL</b> : 운영 종료 (부트캠프 기간 한정) · 데모는 아래 참고

</blockquote>

<br>

### ✔️ 핵심 과제

| 문제 | 설명 |
|------|------|
| 트래픽 폭주 | 오픈 직후 수천 명의 동시 접속 |
| 좌석 중복 예매 | 동일 좌석에 대한 동시 요청 |
| 결제 중 이탈 | 결제 실패·이탈로 인한 좌석 점유 |
| 조회 트래픽 증가 | 취소표를 노린 반복 조회 |

<br>

### ✔️ 핵심 설계

| 설계 영역 | 적용 내용 |
|----------|----------|
| **대규모 트래픽 제어** | `Redis Sorted Set` 기반 대기열, 주기적 입장 승격 |
| **좌석 동시성 제어** | `@Version` 기반 낙관적 락, 중복 예매 방지 |
| **결제 정합성 보장** | 멱등성 처리, 보상 트랜잭션 적용 |
| **성능 검증 및 최적화** | `k6` · `Grafana`, 병목 분석 및 성능 개선 |

<details>
<summary><b>상세 설계 보기</b></summary>

#### ① 대규모 트래픽 제어
- 오픈 직후 발생하는 대규모 트래픽을 Redis Sorted Set 기반 대기열로 분산 처리
- 일정 주기마다 사용자 입장 권한을 부여하여 서버 부하를 제어

#### ② 좌석 동시성 제어
- `@Version`을 활용한 낙관적 락으로 동일 좌석에 대한 동시 요청 제어
- 좌석 중복 예매를 방지하고 데이터 정합성 보장

#### ③ 결제 정합성 보장
- 결제 멱등성 처리와 보상 트랜잭션 적용
- 결제 성공·실패·이탈 상황에서도 좌석 및 예매 데이터 일관성 유지

#### ④ 성능 검증 및 최적화
- `k6`, `Grafana`를 활용한 부하 테스트 수행
- 병목 분석 및 최적화를 통한 처리량·응답속도 개선

</details>

<br>

### 👥 팀원 소개

| <img width="100" height="110" alt="Open Peeps - Avatar (4)" src="https://github.com/user-attachments/assets/dcd7cf4b-3907-4f8b-a2ef-3bc65ccd210c" /> | <img width="100" height="110" alt="Open Peeps - Avatar (1)" src="https://github.com/user-attachments/assets/90b47aa5-f40d-4ee4-8937-90f43cb4e645" /> | <img width="100" height="110" alt="Open Peeps - Avatar (3)" src="https://github.com/user-attachments/assets/f3ab6fe6-1249-4d90-b32a-dd61a87f41d6" /> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                     **이승헌 (팀장)**                                                                     |                                                                     **김소강 (PM)**                                                                     |                                                                        **이지원**                                                                       |
|                                               Event · Match · Booking<br>LCK 시드데이터 구축<br>메인 · 상세 UI 개발                                               |                                        프로젝트 총괄<br>ERD · API 설계<br>Queue · Seat · Payment<br>성능 최적화 · Load Test                                       |                                                       디자인 시스템 구축<br>공통 UI · 레이아웃<br>인증 · 관리자 기능                                                      |
|                                                    **BE** █████░░░░░ 50%<br>**FE** █████░░░░░ 50%                                                    |                                                    **BE** ████████░░ 80%<br>**FE** ██░░░░░░░░ 20%                                                    |                                                    **BE** ██░░░░░░░░ 20%<br>**FE** ████████░░ 80%                                                    |
|                                                        [GitHub](https://github.com/2shoneycom)                                                       |                                                        [GitHub](https://github.com/cherry2766)                                                       |                                                        [GitHub](https://github.com/Koalaman0)                                                        |


<br><br><br>

## 🛠️ 기술 스택

### Backend
![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle_Database-F80000?style=for-the-badge&logo=oracle&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=for-the-badge&logo=flyway&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### Infrastructure
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

### External Service
![Toss Payments](https://img.shields.io/badge/Toss_Payments-0064FF?style=for-the-badge&logoColor=white)


<br><br><br>

## 🏗️ 시스템 아키텍처

<img width="1000" alt="시스템 아키덱처" src="https://github.com/user-attachments/assets/72583b66-d914-45c8-9c5c-fd41f05058bc" /> <br>

- React 프론트엔드 — Nginx가 정적 파일로 서빙 (Nginx가 정적 파일로 서빙하며 별도 서버로 동작하지 않음)
- Nginx — 정적 서빙 + /api 리버스 프록시 (+ 좌석조회 응답캐시)
- Spring Boot — API 서버 (모놀리식)
- Redis — 대기열(Sorted Set) + JWT refresh 토큰
- Oracle — 메인 데이터 저장 (JPA, 좌석 낙관적 락)
- Toss Payments — 외부 결제 연동
- 전체가 단일 EC2에 도커 컴포즈 올인원

<br><br><br><br>


## 🔄 CI/CD


<img width="1000" alt="CI/CD 파이프라인" src="https://github.com/user-attachments/assets/7eb30c1f-fb66-40ac-9924-0392679f603c" /> <br>

- CI (검증) — develop/main의 모든 push/PR에서 실행
     - Backend 빌드 + 테스트 (Testcontainers)
     - Frontend 빌드
- CD (배포) — main 머지(push) 시에만 자동 배포 (SSH → EC2 재배포)

<br><br><br><br>

## 🧩 ERD

<img width="1000" alt="ERD 다이어그램" src="https://github.com/user-attachments/assets/f9a8c4e3-beb3-488d-abba-8c9e173290ea" />

<br><br><br><br>

## 📖 API 명세
| **인증 API** | **사용자 / 이벤트 API** |
|---|---|
| <img width="470" height="411" alt="스크린샷 2026-06-19 142004" src="https://github.com/user-attachments/assets/80b7f810-4f7b-4d53-88cf-7d10d5be1dfc" /> | <img width="470" height="411" alt="스크린샷 2026-06-19 142014" src="https://github.com/user-attachments/assets/65312044-7b47-42ea-9fab-fbf107720a59" /> |

| **좌석 / 대기열 API** | **예매 / 결제 API** |
|---|---|
| <img width="470" height="411" alt="스크린샷 2026-06-19 142023" src="https://github.com/user-attachments/assets/48c4d50e-f38e-47a3-a362-18b75713d6c7" /> | <img width="470" height="411" alt="스크린샷 2026-06-19 142029" src="https://github.com/user-attachments/assets/93d9e730-d4be-4d88-9fa5-196d64a647f4" /> | 

<br><br><br><br>

## 🎬 주요 기능 데모

| **로그인 / 회원가입** | **이벤트 필터** |
|---|---|
| <img width="400" height="250" alt="login" src="https://github.com/user-attachments/assets/329c99bc-6795-4c87-b123-35d72313e081" /> | <img width="400" height="250" alt="filter" src="https://github.com/user-attachments/assets/46438b3c-8608-458d-aebb-517c9f8bdcf1" /> |

| **대기열 입장** | **좌석 선택 & 점유** |
|---|---|
| <img width="400" height="250" alt="대기열" src="https://github.com/user-attachments/assets/235c8529-f9cd-4fb9-9f8e-d108a456197f" />| <img width="400" height="250" alt="좌석선택" src="https://github.com/user-attachments/assets/12a0cbcc-3045-41dd-98bb-47272e48ee4c" /> |

| **결제 (토스페이먼츠)** | **예매 내역 / 취소** |
|---|---|
| <img width="400" height="250" alt="결제토스" src="https://github.com/user-attachments/assets/7e470050-26a6-4449-8e5d-50934737b76e" /> | <img width="400" height="250" alt="예매취소" src="https://github.com/user-attachments/assets/6ebbcbdd-40d1-4d68-a7c8-90de1b8c4797" /> |

| **관리자 페이지** | **비밀번호 찾기** |
|---|---|
| <img width="400" height="250" alt="관리자 페이지" src="https://github.com/user-attachments/assets/48c84191-1e12-4a12-87f1-153c7248e6dc" /> | <img width="400" height="250" alt="비밀번호 찾기" src="https://github.com/user-attachments/assets/b7c750b0-8a9a-4a35-9fe4-ae467f5f7a5a" /> |

<br><br><br><br>

## ⚙️ 핵심 기술 구현

| 기능 | 구현 내용 |
|--------|--------|
| 대기열 | Redis Sorted Set 기반 대기열로 오픈 직후 트래픽 분산 |
| 좌석 선점 | @Version 낙관적 락으로 동일 좌석 중복 예매 방지 |
| 결제 정합성 | 멱등성 처리 및 보상 트랜잭션으로 데이터 일관성 보장 |
| 자동 복구 | 만료 스케줄러로 미결제 좌석 자동 반환 |

<br><br><br>

## 📈 성능 개선 및 부하 테스트

### 테스트 시나리오

| 시나리오 | 검증 내용 | 결과 |
|----------|----------|----------|
| A 좌석 동시성 | 인기 좌석 1000명 동시 요청 | 중복 예매 0건 |
| B 대기열 스파이크 | 5000 RPS 진입 트래픽 검증 | 병목 분석 및 튜닝 |
| C 결제 종단 | 점유 → 예매 → 결제 정합성 검증 | payment = booking = seat 일치 |
| D 대기열 ON/OFF | 대기열 적용 효과 검증 | reserve p95 59% 감소 |
| E 좌석 조회 | 반복 조회 트래픽 대응 검증 | 병목 분석 및 튜닝 |
| F 락 스트레스 | 1좌석 4000명 동시 요청 | 성공 1명 · 중복 0건 |

<br>

### 로컬 환경 성능 개선

| 병목 구간 | 선택한 튜닝 | Before | After |
|----------|----------|----------|----------|
| 대기열 진입 | Redis-only + Batch Insert | 595/s · p95 18.4s | 1065/s · p95 9.2s |
| 좌석 조회 | Caffeine Cache (TTL 2s) | p95 4.79s | p95 883ms |
| 락 스트레스 | 낙관적 락 유지 | 중복 0건 | 중복 0건 |

<br>

### AWS 실배포 검증

| 병목 구간 | 선택한 튜닝 | Before | After |
|----------|----------|----------|----------|
| 좌석 조회 | Nginx Response Cache (3s) | 300 RPS · p95 5.89s | 3000 RPS · p95 62ms |
| Backend CPU | 응답 캐시 오프로드 | 150% 포화 | 안정화 |
| Error Rate | 응답 캐시 적용 | 12.64% | 0% |

<br>

### 🏆 최종 결과

| 항목 | 성과 |
|------|------|
| 🚀 처리량 | 대기열 진입 **1.8배 증가** (595/s → 1065/s)<br>좌석 조회 **10배 증가** (300 → 3000 RPS) |
| ⚡ 응답속도 | 좌석 조회 **5배 개선** (4.79s → 883ms)<br>AWS 좌석 조회 **95배 개선** (5.89s → 62ms) |
| 🔒 정합성 | **1좌석 4000명 동시 요청 검증**<br>중복 예매 0건 · 5xx 0건 |

<br><br><br>

## 🧯 트러블슈팅

### 🎫 취소한 좌석 재예매 불가

| 구분 | 내용 |
|--------|--------|
| 문제 | 취소 후 동일 좌석 재예매 시 오류 발생 |
| 원인 | BookingSeat UNIQUE 제약이 취소 이력까지 중복으로 판단 |
| 해결 | UNIQUE 제거 → Seat.status + @Version 기반으로 변경 |

<br>

### 💳 결제 진행 중 이탈 시 예매 복구 불가

| 구분 | 내용 |
|--------|--------|
| 문제 | 결제 페이지 이탈 후 진행 중인 예매를 복구할 수 없음 |
| 원인 | PENDING 예매 조회 및 복구 기능 부재 |
| 해결 | PENDING 예매 조회 API 및 결제 복구 로직 구현 |


<br><br><br><br>


## 📁 폴더 구조

```
ticketingMaster/
├── backend/                             
│   └── src/
│       ├── main/
│       │   ├── java/com/ticketmaster/backend/
│       │   │   ├── admin/               
│       │   │   │   ├── booking/
│       │   │   │   ├── event/
│       │   │   │   ├── match/
│       │   │   │   ├── seat/
│       │   │   │   ├── seatgrade/
│       │   │   │   ├── section/
│       │   │   │   └── team/
│       │   │   ├── domain/           
│       │   │   │   ├── auth/
│       │   │   │   ├── booking/
│       │   │   │   ├── event/
│       │   │   │   ├── match/
│       │   │   │   ├── payment/
│       │   │   │   ├── queue/        
│       │   │   │   ├── seat/          
│       │   │   │   ├── team/
│       │   │   │   └── user/
│       │   │   └── global/              
│       │   │       ├── common/
│       │   │       ├── config/
│       │   │       ├── exception/
│       │   │       ├── security/         
│       │   │       └── util/
│       │   └── resources/
│       │       ├── db/
│       │       │   ├── migration/       
│       │       │   └── seed-loadtest.sql
│       │       ├── application.yaml
│       │       ├── application-prod.yaml
│       │       └── application-loadtest.yaml
│       └── test/
├── frontend/                            
│   └── src/
│       ├── components/                  
│       ├── pages/                  
│       ├── store/                       
│       ├── api/                         
│       └── types/                       
├── loadtest/                             
└── docker-compose.yml                    
```

<br><br><br><br>


## 🤝 팀 협업 문화
 
### ✔️ 칸반 보드 기반 스프린트 운영

<img width="1000" alt="스크린샷 2026-06-19 174337" src="https://github.com/user-attachments/assets/114f3e4b-b92b-4c88-9c65-11693671b9ec" />

<br><br>

### ✔️ 데일리 스크럼 & 코드 리뷰
- 매일 스탠드업 미팅으로 진행 상황 공유
- PR 기반 코드 리뷰로 코드 품질 관리
- Notion으로 회의록 및 기술 문서 관리

<img width="1000" alt="스크린샷 2026-06-19 174703" src="https://github.com/user-attachments/assets/c4e839d1-a95d-41c1-ab83-fc7924bc9e80" /> <br>

<br><br>

## 🚀 실행 방법

### 사전 요구사항
- Docker / Docker Compose
- JDK 21
- Node.js 20+

### 1. 저장소 클론 및 환경 변수 설정

    git clone https://github.com/MLP-Ticketing-Master/ticketingMaster.git
    cd ticketingMaster

루트의 `.env` 에 DB 계정, JWT 시크릿, 메일, 토스 키 등을 설정함

### 2. 인프라 실행 (Oracle + Redis)

    docker compose up -d

- Oracle: `localhost:1522` (FREEPDB1)
- Redis: `localhost:6380`

### 3. 백엔드 실행 (Spring Boot)

    cd backend
    ./gradlew bootRun

- API 서버: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html

### 4. 프론트엔드 실행 (Vite)

    cd frontend
    npm install
    npm run dev

- 웹: http://localhost:5173

### Docker 한 번에 실행 (운영 구성)
프론트 + 백엔드 + Oracle + Redis 를 한 번에 띄움

    docker compose -f docker-compose.prod.yml up -d --build

- 웹: http://localhost (nginx 가 /api 를 백엔드로 프록시)
