import React, { useEffect, useState } from "react";
import List from "./components/List";
import { Modal } from "@/components/Modal";
import { cn } from "@/utils/cn";
import { transaction as ico, icons } from "@/components/Icons";
import ReactPaginate from "react-paginate";

function Transactions({ transactions }) {
    const [modal, setModal] = useState(false);

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    useEffect(() => {
        setPageCount(Math.ceil(transactions.length / itemsPerPage));
    }, [itemsPerPage]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    return (
        <div className="p-5 xl:p-8 3xl:p-12">
            <div className='mb-4 xl:mb-6 '>
                <div className='flex sm:items-center sm:justify-between gap-4 sm:flex-row flex-col justify-stretch'>
                    <h1 className='py-4 text-2xl font-bold'>
                        All Transactions ({transactions.length})
                    </h1>

                    <div className='flex items-center justify-between gap-4 flex-1 sm:justify-end'>
                        <div className='flex gap-2 items-center text-sm cursor-pointer pr-1 sm:hidden min-w-28 text-gray-500 font-medium'>
                            Old to New
                            <div className='text-gray-500'>
                                {icons.smallArrow}
                            </div>
                        </div>

                        <div className='relative flex items-center w-full max-w-[250px] xl:max-w-[350px] 2xl:xl:max-w-[450px]'>
                            <input
                                className='border-[0.5px] border-gray-300 rounded-md py-2 xl:py-3 xl:pl-5 pr-8 pl-4 w-full focus:outline-none focus:border-teal-500 text-sm '
                                type='text'
                                name=''
                                id=''
                                placeholder="search your transactions"
                            />
                            <div className='absolute right-1 text-gray-400 pointer-events-none'>
                                {icons.search}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sm:flex gap-2 items-center text-sm cursor-pointer pr-1 hidden  text-gray-500 font-medium'>
                    Old to New
                    <div className='text-gray-500'>{icons.smallArrow}</div>
                </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4  text-sm '>
                {transactions
                    .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                    )
                    .map((transaction, i) => (
                        <List
                            key={i}
                            transaction={transaction}
                            setModal={setModal}
                        />
                    ))}
            </div>

            <div className='mr-4'>
                <ReactPaginate
                    breakLabel='...'
                    nextLabel='>'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel='<'
                    renderOnZeroPageCount={null}
                />
            </div>

            <Modal
                open={modal}
                isClosable={true}
                title='Viewing Transaction'
                setOpen={setModal}
            >
                {modal && (
                    <div className=''>
                        <div className=''>
                            <table className='w-full text-sm'>
                                <tbody>
                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 border-b border-dashed w-32'>
                                            Amount
                                        </th>
                                        <td className='border-b border-dashed '>
                                            <div className='w-[15%] font-medium text-base'>
                                                ${modal.amount}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 border-b border-dashed'>
                                            Type
                                        </th>
                                        <td className='border-b border-dashed '>
                                            <div className='flex gap-4 items-center'>
                                                <div className=''>
                                                    {modal.type}
                                                </div>

                                                <div
                                                    className={cn(
                                                        "text-green-600 inline",
                                                        {
                                                            "rotate-180 text-blue-500":
                                                                modal.type ==
                                                                "withdraw",
                                                        }
                                                    )}
                                                >
                                                    {ico.arrow}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 border-b border-dashed'>
                                            Status
                                        </th>
                                        <td className='border-b border-dashed '>
                                            <div
                                                className={cn(
                                                    "w-[80px] text-xs font-medium flex justify-center items-center rounded-3xl py-[2px] text-white bg-black",
                                                    {
                                                        "text-red-700 bg-red-50":
                                                            modal.status ==
                                                            "failed",
                                                    },
                                                    {
                                                        "text-green-700 bg-green-50":
                                                            modal.status ==
                                                            "done",
                                                    },
                                                    {
                                                        "text-yellow-600 bg-yellow-50":
                                                            modal.status ==
                                                            "pending",
                                                    }
                                                )}
                                            >
                                                {modal.status}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 border-b border-dashed'>
                                            User email
                                        </th>
                                        <td className='border-b border-dashed '>
                                            {modal.userEmail}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 border-b border-dashed'>
                                            Token
                                        </th>
                                        <td className='border-b border-dashed '>
                                            <div className='inline-block p-1 px-3 bg-gray-50 font-medium text-gray-600'>
                                                {/* {modal.token} */}

                                                67716e6b-d479-4366-aff5-73bb7af1c3c5-b4b433ce259905f6d9494acf43b371af-m5tfh3ur
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className='text-left pr-10 font-semibold text-gray-800 py-5 '>
                                            Date
                                        </th>
                                        <td className=''>{modal.date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Transactions;
