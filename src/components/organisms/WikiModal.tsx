import { IWikiModalProps } from "src/interface/interfaceProps";

const WikiModal = (props: IWikiModalProps) => {
  const { addWiki, setAddWiki, action } = props;

  const addWikiModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddWiki({ ...addWiki, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          placeholder="제목을 입력해주세요"
          defaultValue={addWiki.title}
          id="title"
          onChange={(e) => addWikiModal(e)}
        />
        <div></div>
        <input
          placeholder="내용을 입력해주세요"
          defaultValue={addWiki.contents}
          id="contents"
          onChange={(e) => addWikiModal(e)}
        />
        <button onClick={() => action()}>추가하기</button>
      </div>
    </div>
  );
};

export default WikiModal;
