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

  const moveIdx = findSameTitle ? findSameTitle[0]?.id : "";

  const editContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailContents({ ...detailContents, contents: e.target.value });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      saveContents();
    }
  };

  return (
    <div>
      {!isEdit ? (
        splitContents?.map((el, idx) => (
          <div
            onClick={
              findSameTitle[0]?.title === el
                ? () => moveAction(moveIdx)
                : undefined
            }
            key={idx}
          >
            {el}
          </div>
        ))
      ) : (
        <input
          className=" w-full"
          defaultValue={detailContents?.contents}
          onChange={(e) => editContent(e)}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

const WikiDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id") || "0"; // query id

  const [detailContents, setDetailContents] = useState<IWikiDetailContents>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [allContents, setAllContents] = useRecoilState(allContentsState);

  useEffect(() => {
    callDetailContents();
  }, [query]);

  const callDetailContents = () => {
    const result = allContents?.filter((el) => el.id === Number(query));
    setDetailContents({ ...result[0] });
  };

  const onMoveOtherWiki = (id: Number): void => {
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
    <div>
      <h3>{detailContents?.title}</h3>
      {findWikiLink(
        detailContents,
        setDetailContents,
        onMoveOtherWiki,
        isEdit,
        allContents,
        saveContents,
      )}
      {isEdit ? (
        <button onClick={() => saveContents()}>저장하기</button>
      ) : (
        <button onClick={() => setIsEdit(!isEdit)}>수정하기</button>
      )}
    </div>
  );
};

export default WikiDetailPage;
