import { IWikiListProps } from "src/interface/interfaceProps";
import WikiContent from "../atoms/WikiContent";

const WikiList = (props: IWikiListProps) => {
  const { list } = props;

  return (
    <ul className="max_width flex flex-1 flex-col items-center">
      {list.map((el, idx) => (
        <WikiContent key={idx} title={el.title} listIdx={el.id} />
      ))}
    </ul>
  );
};

export default WikiList;
