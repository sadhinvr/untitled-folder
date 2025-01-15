import { cn } from "@/utils/cn";
import React from "react";

function IconBox({ icon, num, txt,className }) {
    return (
        <div className={cn("flex-1 p-6 border rounded-lg min-w-36",className)}>
            <div className="text-teal-500">{icon}</div>

            <div className='font-bold mt-3 mb-2'>{num}</div>

            <div className='font-medium text-gray-900'>{txt}</div>
        </div>
    );
}

export default IconBox;
