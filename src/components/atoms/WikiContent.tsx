import { IWikiContentsProps } from "src/interface/interfaceProps";

const WikiContent = (props: IWikiContentsProps) => {
  const { listIdx, title } = props;

  return <li className="mt-3 w-full bg-white py-4">{title}</li>;
};

export default WikiContent;
