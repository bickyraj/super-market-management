import React from "react";
import PageHeader from "../common/PageHeader.tsx";

const AddNewUnit: React.FC = () => {
    return (
        <>
            <PageHeader title="New Unit"/>
            <div className="bg-white mt-5 p-8">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            {/*<h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>*/}
                            {/*<p className="mt-1 text-sm/6 text-gray-600">*/}
                            {/*    This information will be displayed publicly so be careful what you share.*/}
                            {/*</p>*/}

                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-full">
                                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                        Name*
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                required={true}
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="kg"
                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddNewUnit;