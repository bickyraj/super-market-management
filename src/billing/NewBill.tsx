import React, {useEffect, useState} from "react";
import SuperTable from "../common/SuperTable.tsx";
import Modal from "../common/Modal.tsx";
import PaymentType from "./PaymentType.tsx";
import securePaymentImage from "../assets/secure-payment.png";
import { observer } from "mobx-react-lite";
import {pageHeaderStore} from "../store/PageHeaderStore.ts";
import barCodeScanner from "../assets/barcode-scanner.png";

const NewBill: React.FC = () => {
    useEffect(() => {
        pageHeaderStore.setTitle("");
    }, [])
    const [openModel, setOpenModel] = useState(false);
    const handleOpenModal = () => {
        setOpenModel(true);
    };

    const handleCloseModal = () => {
        setOpenModel(false);
    };
    return (
        <>
            <Modal
                open={openModel}
                onClose={handleCloseModal}
                children={<div className="mt-20 pb-20 px-5"><PaymentType/></div>}
                titleIcon={<img src={securePaymentImage} alt="secure-payment-image" className="h-6 w-auto" />}
            />
            <div className="grid grid-cols-6 bg-white mt-[90px]">
                <div className="col-span-2 flex items-center m-auto">
                    <img className="h-20" src={barCodeScanner} alt="scanning-bar-code"/>
                </div>
                <div className="col-span-3 border-l bg-white border-l-gray-200 border-r border-r-gray-200">
                    <h1 className="p-4 font-semibold border-b-2 border-b-gray-100 text-lg">New Bill</h1>
                    <SuperTable/>
                </div>
            </div>
            <div className="grid grid-cols-6">
                <div className="col-span-4"></div>
                <div className="mt-6 flex col-span-1 items-center justify-end gap-x-2">
                    <button type="button" className="flex rounded-md bg-gray-200 hover:bg-gray-300 px-10 py-2 text-sm font-semibold hover:text-gray-600 text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Cancel
                    </button>
                    <button
                        onClick={handleOpenModal}
                        className="flex rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Pay
                    </button>
                </div>
            </div>
        </>
    );
}
export default observer(NewBill);