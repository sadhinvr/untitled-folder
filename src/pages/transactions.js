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

const getBaseUrl = () => {
    console.log(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)

    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }
    return "http://localhost:3000"; // Fallback for local development
};

export async function getServerSideProps() {
    const baseUrl = getBaseUrl();

    try {
        const res = await fetch(`${baseUrl}/transactions.json`);
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
