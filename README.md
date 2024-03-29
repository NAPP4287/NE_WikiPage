# 코딩허브 과제 설명

프론트엔드 지원자 이나은의 과제물 입니다.

## 과제 간략 요구사항서

- 메인 페이지는 위키 리스트 제목만 보여지는 목록 페이지
- 메인 페이지는 페이지당 5개씩 리스트가 보여지며 그 이후는 페이지네이션 처리
- 메인 페이지는 위키 리스트 추가 할 수 있는 버튼이 존재
  - 버튼 클릭시, 위키 제목과 본문을 쓰고 저장할 수 있는 창이 존재
- 위키 상세 페이지는 제목과 본문으로 구성된 페이지
- 위키 상세 페이지는 본문에서 다른 위키 페이지 제목이 입력되어 있으면 자동 링크 생성되며, 해당 페이지로 이동
- 위키 상세 페이지는 본문을 수정할 수 있는 버튼이 존재
- 버튼 클릭시 본문을 수정하고 저장할 수 있게 구현

### `메인 페이지`

- recoil persist를 사용해 리스트를 추가하고 reload 했을시에도 더미 데이터가 유지
- 페이지네이션 함수 구현을 통하여 이전 버튼과 이후 버튼 사용 가능 여부 판단
- 페이지당 리스트 5개씩, 페이지네이션 5개씩 구현
- 메인 페이지에선 페이지네이션 해당 버튼 클릭시 uri query 변경 => /wikiList?page={해당 버튼 Num}

### `위키 상세 페이지`

- 리스트 클릭시 상세 페이지로 이동 => /wikiList/detail?id={해당 리스트 id}
- recoil persist를 본문 수정 후 reload 했을시에도 더미 데이터가 유지
- '`*`리스트 제목`*`'으로 입력시 자동 링크 걸려 이동 가능하게 구현
