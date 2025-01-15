import React from "react";
import {observer} from "mobx-react-lite";
import sidebarStore from "../store/SidebarStore.ts";
interface IProps {
    title: string;
}

const PageHeader: React.FC<IProps> = (props: IProps) => {
    const {isCollapsed} = sidebarStore;
    return (
        <>
            <div className={`transition-all duration-300 ease-in-out bg-white mx-auto ${isCollapsed ? 'lg:ml-28 md:ml-44': 'lg:ml-64 md:ml-56' } lg:flex px-7 py-3 lg:items-center lg:justify-between mb-3 mt-[70px]`}>
                <div className="min-w-0 flex-1">
                    <h2 className="lg:text-xl flex font-semibold sm:truncate sm:text-xl sm:tracking-tight">
                        {props.title}
                    </h2>
                    {/*<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">*/}
                    {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
                    {/*        <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400"/>*/}
                    {/*        Full-time*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
                    {/*        <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400"/>*/}
                    {/*        Remote*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
                    {/*        <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400"/>*/}
                    {/*        $120k &ndash; $140k*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
                    {/*        <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400"/>*/}
                    {/*        Closing on January 9, 2020*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="mt-5 flex lg:ml-4 lg:mt-0">*/}
                {/*    <span className="hidden sm:block">*/}
                {/*      <button*/}
                {/*          type="button"*/}
                {/*          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
                {/*      >*/}
                {/*        <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5 text-gray-400"/>*/}
                {/*        Edit*/}
                {/*      </button>*/}
                {/*    </span>*/}
                {/*    <span className="ml-3 hidden sm:block">*/}
                {/*      <button*/}
                {/*          type="button"*/}
                {/*          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
                {/*      >*/}
                {/*        <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5 text-gray-400"/>*/}
                {/*        View*/}
                {/*      </button>*/}
                {/*    </span>    */}
                {/*    <span className="sm:ml-3">*/}
                {/*        <button*/}
                {/*          type="button"*/}
                {/*              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                {/*          >*/}
                {/*            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5"/>*/}
                {/*            Publish*/}
                {/*          </button>*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
        </>
    );
}
export default observer(PageHeader);