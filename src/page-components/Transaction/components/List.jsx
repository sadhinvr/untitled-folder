import { transaction as ico } from "@/components/Icons";
import { cn } from "@/utils/cn";
import React from "react";

function List({ transaction, setModal }) {
    return (
        <div className='border-[0.5px] border-gray-300 flex items-center justify-between gap-1 sm:gap-4 p-2 py-4 rounded-md '>
            <div
                className={cn("text-green-600 ", {
                    "rotate-180 text-blue-500": transaction.type == "withdraw",
                })}
            >
                {ico.arrow}
            </div>

            <p className='flex-1 '>
                <span className=''>{transaction.date}</span>

                <span className='block'>{transaction.userEmail}</span>
            </p>

            <div className='flex-grow font-medium flex flex-col sm:flex-row gap-2 justify-center items-center'>
                ${transaction.amount}
                <div
                    className={cn(
                        "w-[80px] text-xs font-medium flex justify-center items-center rounded-3xl py-[2px] text-white bg-black",
                        {
                            "text-red-700 bg-red-50":
                                transaction.status == "failed",
                        },
                        {
                            "text-green-700 bg-green-50":
                                transaction.status == "done",
                        },
                        {
                            "text-yellow-600 bg-yellow-50":
                                transaction.status == "pending",
                        }
                    )}
                >
                    {transaction.status}
                </div>
            </div>

            <div
                className='underline cursor-pointer font-medium max-w-14 sm:max-w-none'
                onClick={() => {
                    setModal({ ...transaction });
                }}
            >
                View Details
            </div>
        </div>
    );
}

export default List;
