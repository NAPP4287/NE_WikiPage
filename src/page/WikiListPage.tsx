import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
// components
import WikiList from "src/components/organisms/WikiList";
import WikiBtnList from "src/components/organisms/WikiBtnList";
import WikiModal from "src/components/organisms/WikiModal";
// utils
import { handlePageDevide, handlePageNum } from "src/utils/commonUtil";
// interface
import {
  IListContents,
  IWikiDetailContents,
  IWikiBtn,
} from "src/interface/interfaceWiki";
// recoil
import { useRecoilState } from "recoil";
import { allContentsState } from "src/recoil/stateList";

const WikiListPage = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);
  const [wikiList, setWikiList] = useState<Array<IListContents>>([]);
  const [wikiBtnDetail, setWikiBtnDetail] = useState<IWikiBtn>({
    next: false,
    prev: false,
    btnArray: [] as Array<number>,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [addWiki, setAddWiki] = useState<IWikiDetailContents>({
    title: "",
    contents: "",
    id: 0,
  });
  const [allContents, setAllContents] = useRecoilState(allContentsState);

  useEffect(() => {
    callWikiList();
    callPageNum();
  }, [allContents]);

  // list 5개만 불러오기
  const callWikiList = () => {
    const result = handlePageDevide(pageNum, allContents);
    setWikiList(result);
  };

  // list page button 불러오기
  const callPageNum = () => {
    const result = handlePageNum(pageNum, allContents);
    setWikiBtnDetail({ ...result });
  };

  // page 이동 query
  const onMoveDetailPage = (id: number): void => {
    navigate({
      pathname: "detail",
      search: createSearchParams({
        id: `${id}`,
      }).toString(),
    });
  };

  const onClickModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleAddWiki = (): void => {
    const arrContents = [...allContents];

    arrContents.unshift({
      ...addWiki,
      id: allContents.length + 1,
    });

    setAllContents([...arrContents]);
  };

  return (
    <>
      <button onClick={onClickModal}>위키 추가</button>
      <WikiList list={wikiList} action={onMoveDetailPage} />
      <WikiBtnList
        list={wikiBtnDetail.btnArray}
        next={wikiBtnDetail.next}
        prev={wikiBtnDetail.prev}
      />
      {isOpenModal && (
        <WikiModal
          addWiki={addWiki}
          setAddWiki={setAddWiki}
          action={handleAddWiki}
        />
      )}
    </>
  );
};

export default WikiListPage;
