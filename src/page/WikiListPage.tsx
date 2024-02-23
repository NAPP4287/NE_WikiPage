import { useState, useEffect } from "react";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
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
import Button from "src/components/atoms/Button";

const WikiListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("page") || "1"; // query query

  const [pageNum, setPageNum] = useState(Number(query));
  const [wikiList, setWikiList] = useState<Array<IListContents>>([]);
  const [wikiBtnDetail, setWikiBtnDetail] = useState<IWikiBtn>({
    next: false,
    prev: false,
    btnArray: [] as Array<number>,
    startPageNum: 1,
    endPageNum: 1,
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
    setPageNum(Number(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allContents, pageNum, query]);

  // list 5개만 불러오기
  const callWikiList = () => {
    const result = handlePageDevide(pageNum, allContents, 5);
    setWikiList(result);
  };

  // list page button 불러오기
  const callPageNum = () => {
    const result = handlePageNum(pageNum, allContents, 5, 3);
    setWikiBtnDetail({ ...result });
  };

  // 위키 리스트 page 이동
  const onMoveListPage = (pageNum: number) => {
    setPageNum(pageNum);
    navigate({
      pathname: "/",
      search: createSearchParams({
        page: `${pageNum}`,
      }).toString(),
    });
  };

  // 페이지네이션 이동
  const onPageGroupMove = (move: string) => {
    if (move === "next") {
      setPageNum(wikiBtnDetail.endPageNum + 1);
      onMoveListPage(wikiBtnDetail.endPageNum + 1);
    } else {
      setPageNum(wikiBtnDetail.startPageNum - 1);
      onMoveListPage(wikiBtnDetail.startPageNum - 1);
    }
  };

  // 위키 상세 page 이동 query
  const onMoveDetailPage = (id: number) => {
    navigate({
      pathname: "detail",
      search: createSearchParams({
        id: `${id}`,
      }).toString(),
    });
  };

  // 위키 추가 모달 함수들
  const onClickModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleAddWiki = () => {
    if (checkBlankInput() === true) {
      const arrContents = [...allContents];

      arrContents.unshift({
        ...addWiki,
        id: allContents.length + 1,
      });

      setAllContents([...arrContents]);
      setIsOpenModal(false);
    } else {
      alert(`${checkBlankInput()}을 채워주세요.`);
    }
  };

  const checkBlankInput = () => {
    if (addWiki.title === "") return "제목";
    if (addWiki.contents === "") return "본문";
    return true;
  };

  return (
    <div className="max_width w-full">
      <div className="flex flex-row-reverse">
        <Button
          className="bg-black text-white"
          action={onClickModal}
          title={"위키 추가"}
        />
      </div>
      <WikiList list={wikiList} action={onMoveDetailPage} />
      <WikiBtnList
        list={wikiBtnDetail.btnArray}
        next={wikiBtnDetail.next}
        prev={wikiBtnDetail.prev}
        movePage={onMoveListPage}
        moveGroup={onPageGroupMove}
      />
      {isOpenModal && (
        <WikiModal
          addWiki={addWiki}
          setAddWiki={setAddWiki}
          action={handleAddWiki}
          close={onClickModal}
        />
      )}
    </div>
  );
};

export default WikiListPage;
