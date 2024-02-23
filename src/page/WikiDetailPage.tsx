import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
// recoil
import { useRecoilState } from "recoil";
import { allContentsState } from "src/recoil/stateList";
// interface
import { IWikiDetailContents } from "src/interface/interfaceWiki";
import Button from "src/components/atoms/Button";

// 본문 페이지
const WikiDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id") || "0"; // query id

  const [detailContents, setDetailContents] = useState<IWikiDetailContents>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [allContents, setAllContents] = useRecoilState(allContentsState);

  useEffect(() => {
    callDetailContents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const callDetailContents = () => {
    const result = allContents?.filter((el) => el.id === Number(query));
    setDetailContents({ ...result[0] });
  };

  const onMoveOtherWiki = (id: any): void => {
    navigate({
      search: createSearchParams({
        id: `${id}`,
      }).toString(),
    });
  };

  const saveContents = (): void => {
    const saveIdx = allContents.findIndex((el) => String(el.id) === query);

    const startArr = allContents.slice(0, saveIdx);
    const endArr = allContents.slice(saveIdx + 1, allContents.length);
    const changeArr: Array<IWikiDetailContents> | any = [
      ...startArr,
      detailContents,
      ...endArr,
    ];

    setAllContents([...changeArr]);
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex flex-1 flex-col rounded-[10px] bg-white px-[60px] py-[20px]">
      <div className="flex-1">
        <h3 className="border-b-[2px] py-[10px] text-[30px] font-bold">
          {detailContents?.title}
        </h3>
      </div>
      {findWikiLink(
        detailContents,
        setDetailContents,
        onMoveOtherWiki,
        isEdit,
        allContents,
        saveContents,
      )}
      <div className="flex-1">
        {isEdit ? (
          <Button
            action={() => saveContents()}
            title={"저장하기"}
            className="bg-blue-main"
          />
        ) : (
          <Button
            action={() => setIsEdit(!isEdit)}
            title={"수정하기"}
            className="bg-slate-600"
          />
        )}
      </div>
    </div>
  );
};

// 다른 위키 제목 찾기
const findWikiLink = (
  detailContents?: IWikiDetailContents,
  setDetailContents?: SetStateAction<any>,
  moveAction?: any,
  isEdit?: boolean,
  allContents?: Array<IWikiDetailContents>,
  saveContents?: Function | any,
) => {
  const splitContents = detailContents?.contents?.split("*");
  const findSameTitle: any = allContents?.filter((el) =>
    splitContents?.includes(el.title),
  );

  const editContent = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDetailContents({ ...detailContents, contents: e.target.value });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      saveContents();
    }
  };

  const findLinkIdx = () => {
    const onlyTitleArr = findSameTitle.map(
      (el: IWikiDetailContents) => el.title,
    );

    return onlyTitleArr.map((el: string) => splitContents?.indexOf(el));
  };

  const moveIdArr = (idxArr: Array<number>) => {
    const findIdArr = findSameTitle
      ? findSameTitle.map((el: IWikiDetailContents) => el.id)
      : "";

    let arr = new Array(splitContents?.length).fill(0);

    for (let i = 0; i < idxArr.length; i++) {
      arr[idxArr[i]] = findIdArr[i];
    }

    return arr;
  };

  return (
    <div className="flex-7 mt-[20px]">
      {!isEdit ? (
        <div className="flex flex-wrap">
          {splitContents?.map((el, idx) => (
            <div
              className={`pr-[4px] text-left ${findLinkIdx().includes(idx) && "cursor-pointer font-bold text-blue-main underline"}`}
              onClick={
                findLinkIdx().includes(idx)
                  ? () => moveAction(moveIdArr(findLinkIdx())[idx])
                  : undefined
              }
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
      ) : (
        <textarea
          className="h-full w-full border-[1px]"
          defaultValue={detailContents?.contents}
          onChange={(e) => editContent(e)}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default WikiDetailPage;
