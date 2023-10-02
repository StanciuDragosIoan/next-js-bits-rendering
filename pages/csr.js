"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
const CSR = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);
  return (
    <div className="flex flex-col mb-4 items-center justify-center min-h-screen">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-5 mt-[33vh]">
          I am a client side rendered page and I too fetch some data from the
          back-end.
        </h1>

        <p className="text-3xl font-bold">
          For my content the browser downloaded a minimalistic skeleton of the
          page and the required JS code. Then the JS code updates the DOM and
          renders the page. I can use client side hooks such as
          <Link
            className="text-blue-600 hover:text-blue-800 hover:underline"
            href="https://react.dev/reference/react/useEffect"
            target="_blank"
          >
            useEffect()
          </Link>
          to fetch data behind the scenes.
        </p>
        <p className="text-3xl font-bold">
          Below you can see the data I fetched behind scenes:
        </p>

        <h2 className="text-xl font-bold m-5 text-center">Posts Data:</h2>
        {data.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 text-white shadow-md rounded-lg mt-5"
          >
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">{p.title}</p>
              <p>{p.body}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm">Id: ${p.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSR;
