import {getCompanies} from "../Services/CompanyService";
import {useEffect, useState} from "react";
import type {Company} from "../types/company";


function CompanyCard() {

    const [companies, setCompanies] = useState<Company[]>([]);
    async function fetchCompanies() {
        const companies = await getCompanies();
        setCompanies(companies);
    }
    useEffect(() => {
        fetchCompanies();
    }, []);
    
    return (
        <div>
            <h1>Google</h1>
            <p>Welcome to Google</p>
        </div>
    )
}

export default CompanyCard