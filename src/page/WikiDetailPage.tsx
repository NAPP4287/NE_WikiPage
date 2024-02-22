import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
// dummyData
import { DWikiDetailContents } from "src/dummyData/wikiListData";
// interface
import { IWikiDetailContents } from "src/interface/interfaceWiki";

const findWikiLink = (content?: string, moveAction?: any, isEdit?: boolean) => {
  const splitContents = content?.split("*");
  const findSameTitle = DWikiDetailContents.filter((el) =>
    splitContents?.includes(el.title),
  );
  const moveIdx = findSameTitle[0]?.id;

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
        <textarea>{content}</textarea>
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

  useEffect(() => {
    callDetailContents();
  }, [query]);

  const callDetailContents = () => {
    const result = DWikiDetailContents.filter((el) => el.id === Number(query));
    setDetailContents({ ...result[0] });
  };

  const onMoveOtherWiki = (id: Number): void => {
    navigate({
      search: createSearchParams({
        id: `${id}`,
      }).toString(),
    });
  };

  return (
    <div>
      <h3>{detailContents?.title}</h3>
      {findWikiLink(detailContents?.contents, onMoveOtherWiki, isEdit)}
      {isEdit ? (
        <button onClick={() => setIsEdit(!isEdit)}>저장하기</button>
      ) : (
        <button onClick={() => setIsEdit(!isEdit)}>수정하기</button>
      )}
    </div>
  );
};

export default WikiDetailPage;
