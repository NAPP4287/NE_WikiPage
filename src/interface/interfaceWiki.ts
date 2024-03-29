export interface IListContents {
  title: string;
  id: number;
}

export interface IWikiBtn {
  next: boolean;
  prev: boolean;
  btnArray: Array<number>;
  startPageNum: number;
  endPageNum: number;
}

export interface IWikiDetailContents extends IListContents {
  contents: string;
}
