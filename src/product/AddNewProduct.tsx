import React from "react";
import PageHeader from "../common/PageHeader.tsx";

const AddNewProduct: React.FC = () => {
    return (
        <>
            <PageHeader title="New Product"/>
            <div className="bg-white mt-5 p-8 rounded-lg">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            {/*<h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>*/}
                            {/*<p className="mt-1 text-sm/6 text-gray-600">*/}
                            {/*    This information will be displayed publicly so be careful what you share.*/}
                            {/*</p>*/}
                            <div className="grid lg:grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="lg:col-span-2">
                                    <div className="grid lg:grid-cols-5 gap-x-6 gap-y-8 sm:grid-cols-6 mb-3">
                                        <div className="lg:col-span-3 sm:col-span-full">
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
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Barcode
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="barcode"
                                                        name="barcode"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-3">
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Category
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Brand
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="barcode"
                                                        name="barcode"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-3">
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Buying Price
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Selling Price
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="barcode"
                                                        name="barcode"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-3">
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Unit
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Quantity
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="barcode"
                                                        name="barcode"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-3">
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Supplier
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-1 sm:col-span-full">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Warehouse
                                            </label>
                                            <div className="mt-2">
                                                <div
                                                    className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        required={true}
                                                        id="barcode"
                                                        name="barcode"
                                                        type="text"
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3">
                        <div className="lg:col-span-2 sm:col-span-full">
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
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddNewProduct;