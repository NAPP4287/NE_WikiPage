import { IWikiBtnListProps } from "src/interface/interfaceProps";
// components
import Button from "src/components/atoms/Button";

const WikiBtnList = (props: IWikiBtnListProps) => {
  const { list, prev, next, movePage, moveGroup } = props;

  return (
    <div className="flex flex-1 justify-center">
      <Button
        disabled={!prev}
        title={"<"}
        size="sm"
        className={`${!prev && "text-slate-400"}`}
        action={() => moveGroup("prev")}
      />
      <ul className="flex items-center justify-center">
        {list.map((el, idx) => (
          <li
            key={idx}
            className={`p-[10px] font-bold ${idx !== 0 && "ml-[10px]"} cursor`}
            onClick={() => movePage(el)}
          >
            {el}
          </li>
        ))}
      </ul>
      <Button
        disabled={!next}
        title={">"}
        size="sm"
        className={`${!next && "text-slate-400"}`}
        action={() => moveGroup("next")}
      />
    </div>
  );
};

export default WikiBtnList;
