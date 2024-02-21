// dummyData
import { DWikiList } from "src/dummyData/wikiListData";

export const handlePageDevide = (pageNum: number) => {
  const currentList = DWikiList.slice((pageNum - 1) * 5, 5 * pageNum);

  return currentList;
};

export const handlePageNum = (pageNum: number) => {
  const allBtnNum = Math.ceil(DWikiList.length / 5);
  const activeNext = allBtnNum / 5 > 1 && allBtnNum > pageNum;
  const activePrev = pageNum > 1;
  const btnArray = rageArray(
    allBtnNum < 5 ? allBtnNum : 5,
    Math.ceil(pageNum / 5),
  );

  return { next: activeNext, prev: activePrev, btnArray: btnArray };
};

const rageArray = (size: number, start: number) => {
  return [...new Array(size).keys()].map((key) => key + start);
};
