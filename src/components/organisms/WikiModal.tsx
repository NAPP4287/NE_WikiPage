import { IWikiModalProps } from "src/interface/interfaceProps";
import Button from "../atoms/Button";

const WikiModal = (props: IWikiModalProps) => {
  const { addWiki, setAddWiki, action, close } = props;

  const addWikiModal = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setAddWiki({ ...addWiki, [e.target.id]: e.target.value });
  };

  return (
    <div className="modalWrap fixed flex h-screen w-full items-center bg-black bg-opacity-30">
      <div className="max_width flex w-2/4 flex-col items-center rounded-2xl bg-white p-4">
        <input
          className="w-full border-b-2 border-slate-200 p-1"
          placeholder="제목을 입력해주세요"
          defaultValue={addWiki.title}
          id="title"
          onChange={(e) => addWikiModal(e)}
        />
        <textarea
          className="mt-4 h-[300px] w-full rounded-[8px] border-2 border-slate-200 p-1"
          placeholder="내용을 입력해주세요"
          defaultValue={addWiki.contents}
          id="contents"
          onChange={(e) => addWikiModal(e)}
        />
        <div>
          <Button title={"추가하기"} action={action} className="bg-black" />
          <Button title={"취소하기"} action={close} className={"bg-red-rose"} />
        </div>
      </div>
    </div>
  );
};

export default WikiModal;
