import { icons } from "@/components/Icons";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

function ApiField({ id,changeKey,i}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(id).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className=''>
            <div className='text-sm font-bold mb-2 text-gray-600'>
                API KEY {i+1}
            </div>
            <div className='flex sm:items-center gap-2 flex-col sm:flex-row'>
                <div className='relative border items-center flex bg-gray-50 rounded text-sm font-medium text-gray-600 overflow-hidden w-full pr-8'>
                    <div className='overflow-x-auto whitespace-nowrap p-3'>
                        {id}
                    </div>
                    {/* <div className={cn('absolute right-2 flex items-center gap-2 cursor-pointer duration-300',{'text-teal-600':copied})}>
                        <span onClick={handleCopy}>{icons.copy}</span>
                        { (
                            <span className={cn('text-xs absolute right-0 bg-white shadow rounded p-1 mr-1 text-teal-600 invisible duration-300 ',{'visible right-full':copied})}>Copied!</span>
                        )}
                    </div> */}
                </div>
                <div onClick={()=>{changeKey(i)}} className='p-3 border border-paint-0 font-semibold text-white whitespace-nowrap bg-paint-0 rounded text-center cursor-pointer text-sm '>
                    Change Key
                </div>
            </div>
        </div>
    );
}

export default ApiField;
