import { makeAutoObservable } from "mobx";

class SidebarStore {
    isCollapsed = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleSidebar = () => {
        this.isCollapsed = !this.isCollapsed;
    }
}

const sidebarStore = new SidebarStore();
export default sidebarStore;
