import { IListContents, IWikiDetailContents } from "./interfaceWiki";

export interface IWikiContentsProps {
  listIdx: number;
  title: string;
  action: Function;
}

export interface IWikiListProps {
  list: Array<IListContents>;
  action: Function;
}

export interface IWikiBtnListProps {
  list: Array<number>;
  next: boolean;
  prev: boolean;
}

export interface IButtonProps {
  disabled?: boolean;
  title: string | number;
  action?: () => void;
  className?: string;
  size?: string;
}

export interface IWikiModalProps {
  addWiki: IWikiDetailContents;
  setAddWiki: Function;
  action: () => void;
  close: () => void;
}
