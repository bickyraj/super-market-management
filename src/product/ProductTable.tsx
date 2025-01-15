import React, {useState} from "react";

const ProductTable: React.FC = () => {
    const data = [
        { id: 1, name: 'John', age: 28, job: 'Engineer' },
        { id: 2, name: 'Sara', age: 24, job: 'Designer' },
        { id: 3, name: 'Michael', age: 31, job: 'Developer' },
        { id: 4, name: 'David', age: 35, job: 'Manager' },
        { id: 5, name: 'Anna', age: 22, job: 'Consultant' },
        { id: 6, name: 'Sophia', age: 29, job: 'Data Scientist' },
        { id: 7, name: 'James', age: 27, job: 'Analyst' },
        { id: 8, name: 'Linda', age: 32, job: 'Product Manager' },
        { id: 9, name: 'Robert', age: 33, job: 'Tech Lead' },
        { id: 10, name: 'Karen', age: 26, job: 'QA Engineer' },
        // Add more rows as needed
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="relative bg-white gray-200 h-[70vh] overflow-y-scroll">
                <div className="relative w-full">
                    <table className="lg:w-full text-left border-spacing-4">
                        <thead>
                        <tr className="text-gray-500 bg-white">
                            <th className="w-[5%] font-light text-sm bg-white sticky top-0">
                                <div className="p-4 border-b border-b-gray-200">Sn</div>
                            </th>
                            <th className="w-1/4 font-light text-sm bg-white sticky top-0">
                                <div className="p-4 border-b border-b-gray-200">Name</div>
                            </th>
                            <th className="w-1/12 font-light text-sm text-right bg-white sticky top-0">
                                <div className="p-4 border-b border-b-gray-200">Price</div>
                            </th>
                            <th className="w-1/12 font-light text-sm text-right bg-white sticky top-0">
                                <div className="p-4 border-b border-b-gray-200">In Stock</div>
                            </th>
                            <th className="w-1/12 font-light text-sm text-right bg-white sticky top-0">
                                <div className="p-4 border-b border-b-gray-200">Amount</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-b-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">2</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 text-gray-900">
                            <td className="pt-2 p-4 text-sm">1</td>
                            <td className="pt-2 p-4">
                                <div className="flex min-w-0 gap-x-2">
                                    {/*<img alt="" src={food1}*/}
                                    {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                                    <div className="min-w-0 flex justify-center items-center">
                                        <p className="text-sm leading-[1.2] font-medium capitalize">sushi</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <div
                                    className="flex text-sm font-medium justify-end">x 3
                                </div>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                            <td className="pt-2 p-4">
                                <p className="text-sm font-medium text-right">20</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex p-4 w-full bg-white gap-1">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-indigo-700
                     bg-indigo-100 text-sm rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`px-3 py-1 rounded ${
                            currentPage === index + 1
                                ? 'bg-indigo-500 text-sm text-white'
                                : 'bg-gray-200 text-sm'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </>
    )
}
export default ProductTable;