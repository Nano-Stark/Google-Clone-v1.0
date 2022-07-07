import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
// import { API_KEY, CONTEXT_KEY } from "../keys/keys";
import Response from "../Reponse";

const Search = ({ results }) => {
  const router = useRouter();
  // console.log(results)
  return (
    <div className="w-full overflow-x-hidden">
      <Head>
        <title>{router.query.q} - Google Search</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
