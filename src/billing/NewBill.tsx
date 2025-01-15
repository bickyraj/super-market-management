import React, {useEffect, useState} from "react";
import SuperTable from "../common/SuperTable.tsx";
import Modal from "../common/Modal.tsx";
import PaymentType from "./PaymentType.tsx";
import securePaymentImage from "../assets/secure-payment.png";
import { observer } from "mobx-react-lite";
import {pageHeaderStore} from "../store/PageHeaderStore.ts";

const NewBill: React.FC = () => {
    useEffect(() => {
        pageHeaderStore.setTitle("New Bill");
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
            <div className="grid grid-cols-5">
                <div className="col-span-3">
                    <SuperTable/>
                    <div className="mt-6 flex items-center justify-end gap-x-2">
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
            </div>
        </>
    );
}
export default observer(NewBill);