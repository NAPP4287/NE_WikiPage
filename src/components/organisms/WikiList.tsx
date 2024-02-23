import { IWikiListProps } from "src/interface/interfaceProps";
import WikiContent from "../atoms/WikiListContent";

const WikiList = (props: IWikiListProps) => {
  const { list, action } = props;

  return (
    <ul className="flex flex-1 flex-col items-center">
      {list.map((el, idx) => (
        <WikiContent
          action={action}
          key={idx}
          title={el.title}
          listIdx={el.id}
        />
      ))}
    </ul>
  );
};

export default WikiList;
