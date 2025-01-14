import React, {ReactNode, useEffect, useState} from "react";
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";

interface IProps {
    children: ReactNode;
    open: boolean;
    titleIcon?: ReactNode;
}
const Model: React.FC<IProps> = (props: IProps) => {
    const [open, setOpen] = useState(props.open);
    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);
    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-30">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="lg:w-[900px] lg:h-auto relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white border-b border-b-gray-100 px-4 pb-4 pt-5">
                                <div className="flex gap-2 text-md justify-items-center text-base font-semibold text-gray-900 pb-3 mb-3 border-b border-gray-200">
                                    {props.titleIcon}
                                    <span>Select Payment</span>
                                </div>
                                {props.children}
                            </div>
                            {/*<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        onClick={() => setOpen(false)}*/}
                            {/*        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"*/}
                            {/*    >*/}
                            {/*        Submit*/}
                            {/*    </button>*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        data-autofocus={1}*/}
                            {/*        onClick={() => setOpen(false)}*/}
                            {/*        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"*/}
                            {/*    >*/}
                            {/*        Cancel*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
export default Model;