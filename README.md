## Wepleshop 프로젝트 소개

- 인플루언서 굿즈 쇼핑몰 [마플](https://marpple.shop/kr/)에 영감을 받아 진행한 프로젝트입니다.
- 짧은 프로젝트 기간으로 메인 페이지, 상품 상세 페이지, 회원가입 및 로그인 부분을 구현해보았습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2021.12.27. ~ 2022.01.07
- 개발 인원 : 이진웅, 최종민, 장종현, 박효상, 김영욱
- [프론트 github 링크](https://github.com/woongstaa/fullstack3-1st-wepleshop-frontend)
- [백엔드 github 링크](https://github.com/woongstaa/fullstack3-1st-wepleshop-backend)

### 프로젝트 선정이유

프로젝트 선정 기준은 아래와 같이 세웠습니다.

1.  이커머스 사이트일 것
2.  독창적인 구조를 가지지 않을 것
3.  충분한 유저를 가진 사이트일 것

위 기준을 가지고 프로젝트를 선정하였고, 마플샵을 선정한 첫번째 이유는 웹개발의 정석은 이커머스라고 생각해서 입니다. BTC구조를 가진 서비스들이 날로 성장하고있고 앞으로도 성장가능성이 크며 그 시장 역시 무궁무진하다고 느꼈기 때문입니다.

두번째 이유는 ‘바퀴를 재발명하지 마라’라는 말이 있습니다. 새로운 것을 창조하는 것에 시간과 노력을 투자하기 보다 이미 서비스 되고 있는 것을 잘 따라하는 것이 현재의 성장에 도움이 된다고 판단했기 때문입니다.

마지막 이유는 충분한 유저를 가진 사이트는 유지/보수 측면에서도 충분히 배울점이 있다고 생각했습니다. 자료 조사를 하면서 훌륭한 사이트들이 많이 있었습니다. 그 중에서도 마플샵이 특별하다고 여겨서 선택한 것은 아니지만, 마플샵은 트랜드를 담고 있으며 과하지 않는 동적인 이미지들과 유튜브를 연계하여 제품을 소개하는 것이 흥미로웠고, 기본적인 CRUD와 API로 구현이 가능하다고 판단해서 선정하게 되었습니다.

## 적용 기술 및 구현 기능

### 적용 기술

- Front-End : React.js, Sass
- Back-End : Node.js, Express, Prisma, nodemon, JWT, Bcrypt, My SQL, CORS
- Common : RESTful API
- Community Tools : Slack, Zoom, Notion

### 구현 기능

- MySQL을 이용해 데이터베이스 관리

- **카테고리 API ✨**
  - 1차 카테고리, 2차 카테고리 리스트 API

### 결과물 스크린샷, 영상

[동영상 링크](https://youtu.be/ajVi4Gv-ouk)

- 메인 페이지

<img width="1427" alt="스크린샷 2022-01-12 오후 7 13 42" src="https://user-images.githubusercontent.com/70682567/149121009-7e8ea0f8-e1a2-4d1d-bf4e-a5bec7792cf4.png">
<br>
<img width="1427" alt="스크린샷 2022-01-12 오후 6 48 52" src="https://user-images.githubusercontent.com/70682567/149118227-81a815ce-91d6-4b34-9efb-791bf41661d2.png">

- 디테일 페이지

<img width="1427" alt="스크린샷 2022-01-12 오후 6 50 12" src="https://user-images.githubusercontent.com/70682567/149118268-0c062a94-a1c2-440e-8bd9-0018b0d22daa.png">

## Reference

- 이 프로젝트는 [마플](https://marpple.shop/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
