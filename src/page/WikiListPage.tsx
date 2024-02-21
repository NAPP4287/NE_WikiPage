import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
// components
import WikiList from "src/components/organisms/WikiList";
import WikiBtnList from "src/components/organisms/WikiBtnList";
// utils
import { handlePageDevide, handlePageNum } from "src/utils/commonUtil";
// interface
import { IListContents, IWikiBtn } from "src/interface/interfaceWiki";

const WikiListPage = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);
  const [wikiList, setWikiList] = useState<Array<IListContents>>([]);
  const [wikiBtnDetail, setWikiBtnDetail] = useState<IWikiBtn>({
    next: false,
    prev: false,
    btnArray: [] as Array<number>,
  });

  useEffect(() => {
    callWikiList();
    callPageNum();
  }, []);

  // list 5개만 불러오기
  const callWikiList = () => {
    const result = handlePageDevide(pageNum);
    setWikiList(result);
  };

  // list page button 불러오기
  const callPageNum = () => {
    const result = handlePageNum(pageNum);
    setWikiBtnDetail({ ...result });
  };

  const onMoveDetailPage = (id: number): void => {
    console.log("?");
    navigate({
      pathname: "detail",
      search: createSearchParams({
        id: `${id}`,
      }).toString(),
    });
  };

  return (
    <div>
      <WikiList list={wikiList} action={onMoveDetailPage} />
      <WikiBtnList
        list={wikiBtnDetail.btnArray}
        next={wikiBtnDetail.next}
        prev={wikiBtnDetail.prev}
      />
    </div>
  );
};

export default WikiListPage;
