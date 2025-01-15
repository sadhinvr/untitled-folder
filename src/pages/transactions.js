import Layout from "@/components/Layouts/Layout";
import Transactions from "@/page-components/Transaction/Transactions";
import React from "react";


function transaction({ transactions }) {
    return (
        <Layout>
            <Transactions transactions={transactions} />
        </Layout>
    );
}
export default transaction;


export async function getServerSideProps() {
    const baseUrl = process.env.VERCEL_URL || "http://localhost:3000";
    try {
        const res = await fetch(`${baseUrl}/transactions.json`);
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        return {
            props: {
                transactions: data,
            },
        };
    } catch (error) {
        console.error("Error fetching transactions:", error.message);
        return {
            props: {
                transactions: [],
            },
        };
    }
}


