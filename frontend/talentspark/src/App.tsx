import Welcome from "./components/welcome";
import NavBar from "./components/navbar";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import {UseEffect, useState} from "react";
import {getCompanies} from "./Services/CompanyService";
import type {Company} from "./types/company"

function App(){
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<Error | null>(null)
  const [companies,setCompanies] = useState<Company[]>([]);

  async function fetchCompanies(){
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

if(loading){
  return <div>Loading...</div>
}

if (error){
  return <div>Error:{error.message}</div>
}
  
  return (
    <>
      <NavBar />
      <Welcome />
      <br />
      <CompanyCard key={companies.id}
      companies={companies}/>
      <JobCard />
      <Footer />
    </>
  )

export default App