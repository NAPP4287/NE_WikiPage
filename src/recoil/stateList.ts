import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
// interface
import {
  IWikiDetailContents,
  IListContents,
} from "src/interface/interfaceWiki";
// dummyData
import { DWikiList, DWikiDetailContents } from "src/dummyData/wikiListData";

const { persistAtom } = recoilPersist({
  key: "importantState",
  storage: sessionStorage,
});

export const wikiListState = atom<Array<IListContents>>({
  key: "wikiListState",
  default: [...DWikiList],
  effects_UNSTABLE: [persistAtom],
});

export const allContentsState = atom<IWikiDetailContents[]>({
  key: "allContents",

  // default에는 임의의 데이터를 넣어줍시다.
  default: [...DWikiDetailContents],
  effects_UNSTABLE: [persistAtom],
});
