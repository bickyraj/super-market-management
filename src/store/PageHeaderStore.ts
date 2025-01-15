import {makeAutoObservable} from "mobx";

class PageHeaderStore {
    pageTitle: string | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setTitle = (title: string) => {
        this.pageTitle = title
    }
}
export const pageHeaderStore = new PageHeaderStore();