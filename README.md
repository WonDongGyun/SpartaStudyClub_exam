# SpartaStudyClub
트리스티의 Nest js + TypeOrm + GraphQl를 사용한 Sparta Study Club Project  
[**[트리스티의 Nest js + TypeOrm + GraphQl를 사용한 Clone Cording 프로젝트에 오신 여러분을 환영합니다!]**](https://tristy.tistory.com/)  

<br/>
<br/>

간단한 기능이 포함된 프로젝트입니다.  
[코드 안에 주석이 포함되어 있는 프로젝트입니다.]  

Sparta Study Club Project 
use  Nest js + TypeOrm + GraphQl

<br/>
<br/>

🤔 프로젝트 개요
-------------  
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>진행 날짜 - 2021.04.09 ~ 2021.04.22</b></li>
<li><b>목적 - 2주간의 미니 프로젝트 전에 혼자서 Nest js + TypeOrm + GraphQl 맛좀 봐볼까? </b></li>
</ul>

<br/>
<br/>

😀 사용한 패키지 및 CSS  
-----------------
- **Nest js**  　　　=> node.js의 웹 프레임워크  
- **TypeOrm**  　　　=> mysql을 사용하기 위한 ORM  
- **GraphQl**  　　　=> Rest API는 이제 안녕~ 클라이언트는 필요한 데이터의 구조를 지정할 수 있으며, 서버는 정확히 동일한 구조로 데이터를 반환할 수 있습니다.  
- **eslint**　　　　=> node.js에서 팀 단위 협업시, 문법 검사를 해보자  
- **prettier**　　　=> node.js에서 팀 단위 협업시, 코딩 스타일을 통일해보자  


<br/>
<br/>

🤭 구현한 기능 
-----------------
1.  간단한 회원가입 기능

<br/>
<br/>

🤭 이번 프로젝트를 하며 새롭게 배운 것
-----------------
1.  어썸한 Nest js!!!    
2.  어썸한 GraphQl !!!  
3.  어썸한 TypeScript !!!  
4.  어썸한 TypeOrm !!!  

<br/>
<br/>


😎 폴더 구조  
-----------------  

<br/>

```bash
ssc-project
├─ node_modules
│
├─ dist
│  
├─ src
│  ├─ dto
│  │  └─ user.dto.ts
│  │  
│  ├─ entity  
│  │  └─ quest.entity.ts
│  │  └─ user.entity.ts
│  │  └─ userToday.entity.ts
│  │  
│  ├─ input_graphql  
│  │  └─ user.input.ts
│  │ 
│  ├─ register_Module
│  │  └─ register.module.ts
│  │  └─ register.resolver.ts
│  │  └─ register.service.ts
│  │  
│  └─ app.module.ts
│  └─ main.ts
│  
└─ .eslintrc.js
└─ .prettierrc
└─ nest-cli.json
└─ package-lock.json
└─ package.json
└─ schema.gpl
└─ tsconfig.build.json
└─ tsconfig.json
```

<br/>
<br/>
<br/>
