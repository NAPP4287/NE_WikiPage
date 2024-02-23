// dummyData
import { IWikiDetailContents } from "src/interface/interfaceWiki";

export const handlePageDevide = (
  pageNum: number,
  allContents: Array<IWikiDetailContents>,
  showContentsNum: number,
) => {
  const currentList = allContents.slice(
    (pageNum - 1) * showContentsNum,
    showContentsNum * pageNum,
  );

  return currentList;
};

export const handlePageNum = (
  pageNum: number,
  allContents: Array<IWikiDetailContents>,
  showContentsNum: number,
  showPageGroupNum: number,
) => {
  // 총 페이지 수
  const allPageNum = Math.ceil(allContents.length / showContentsNum);
  // 화면에 보여질 페이지 그룹
  const showPageArrNum = Math.ceil(pageNum / showContentsNum);
  // 화면에 보여질 페이지의 첫번째 페이지 번호
  const startPageNum = (showPageArrNum - 1) * showPageGroupNum + 1;
  // 화면에 보여질 페이지의 마지막 페이지 번호
  const endPageNum =
    allPageNum < showPageArrNum * showContentsNum
      ? allPageNum
      : showPageArrNum * showContentsNum;

  // 다음 버튼 활성화 boolean
  const activeNext =
    allPageNum / showContentsNum > 1 &&
    Math.ceil(allPageNum / showPageGroupNum) > showPageArrNum;
  // 이전 버튼 활성화 boolean
  const activePrev = pageNum > showPageGroupNum;

  let btnArr = [];

  for (let i = startPageNum; i <= endPageNum; i++) {
    btnArr.push(i);
  }

  return {
    next: activeNext,
    prev: activePrev,
    btnArray: btnArr,
    startPageNum: startPageNum,
    endPageNum: endPageNum,
  };
};
