import { IWikiContentsProps } from "src/interface/interfaceProps";

const WikiContent = (props: IWikiContentsProps) => {
  const { listIdx, title, action } = props;

  return (
    <li className="mt-3 w-full bg-white py-4" onClick={() => action(listIdx)}>
      {title}
    </li>
  );
};

export default WikiContent;
