import { IListContents } from "./interfaceWiki";

export interface IWikiContentsProps {
  listIdx: number;
  title: string;
}

export interface IWikiListProps {
  list: Array<IListContents>;
}

export interface IWikiBtnListProps {
  list: Array<number>;
  next: boolean;
  prev: boolean;
}

export interface IButtonProps {
  disabled?: boolean;
  title: string | number;
}
