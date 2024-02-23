import { IWikiContentsProps } from "src/interface/interfaceProps";

const WikiContent = (props: IWikiContentsProps) => {
  const { listIdx, title, action } = props;

  return (
    <li
      className="mt-3 w-full cursor-pointer rounded-[10px] border-[1px] border-slate-400 bg-white py-[30px] duration-200 hover:bg-slate-400 hover:text-white"
      onClick={() => action(listIdx)}
    >
      {title}
    </li>
  );
};

export default WikiContent;
