import { IWikiBtnListProps } from "src/interface/interfaceProps";
// components
import Button from "src/components/atoms/Button";

const WikiBtnList = (props: IWikiBtnListProps) => {
  const { list, prev, next } = props;

  return (
    <div className="flex flex-1 justify-center">
      <Button disabled={!prev} title={"<"} />
      {list.map((el, idx) => (
        <Button key={idx} title={el} />
      ))}
      <Button disabled={!next} title={">"} />
    </div>
  );
};

export default WikiBtnList;
