import React from "react";
import IconBox from "./components/IconBox";
import { transaction, userIcons } from "@/components/Icons";

function Dashboard() {
    return (
        <div className='p-5 xl:p-8 3xl:p-12 '>
            <div className="font-bold text-lg mb-4">User Statistics</div>
            <div className="flex gap-4 flex-wrap">
            <IconBox icon={userIcons.total} txt='Total Users' num={200}/>
            <IconBox icon={userIcons.verified} txt='Verified' num={50}/>
            <IconBox icon={userIcons.unverified} txt='Unverified' num={150}/>
            <IconBox icon={userIcons.blocked} txt='Blocked' num={0}/>
            </div>


            <div className="font-bold text-lg mb-4 mt-8">Transaction</div>
            <div className="flex gap-4 flex-wrap">
            <IconBox icon={transaction.total} txt='Total Transaction' num={100}/>
            <IconBox icon={transaction.withdraw} txt='Withdrawals ' num={45}/>
            <IconBox icon={transaction.deposit} txt='Deposits' num={55}/>
            <IconBox icon={transaction.pending} txt='Pendings' num={0}/>
            </div>
    
        </div>
    );
}

export default Dashboard;
