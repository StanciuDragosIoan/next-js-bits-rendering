import Link from "next/link";
export default function SSR({ users, headers }) {
  return (
    <div className="flex flex-col mb-4 items-center justify-center min-h-screen">
      <div className="w-1/3">
        <p className="text-3xl font-bold">
          I am regenerated on the server upon each request. This means my
          contents are always 100% fresh and up to date. I use the
          <Link
            className="ml-5 text-blue-600 hover:text-blue-800 hover:underline"
            href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props"
            target="_blank"
          >
            getServerSideProps()
          </Link>
          method to fetch data behind the sceene and access request data.
        </p>
        <p className="text-3xl font-bold">
          Below you can see the data I fetched behind scenes and the request
          headers:
        </p>
        <h2 className="text-xl font-bold m-5 text-center">Request Headers</h2>
        <div className="bg-gray-800 text-white shadow-md rounded-lg mt-5">
          <pre className="text-gray-300 text-sm whitespace-pre-wrap">
            {JSON.stringify(headers, null, "\t")}
          </pre>
        </div>
        <h2 className="text-xl font-bold m-5 text-center">Users Data:</h2>
        {users.map((u) => (
          <div
            class="bg-gray-800 text-white shadow-md rounded-lg mt-5"
            key={u.id}
          >
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{u.name}</div>
              <p>email address: {u.email}</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-sm">Id: ${u.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const users = await data.json();

  const { req } = context;

  const { headers } = req;

  return {
    props: {
      users,
      headers,
    },
  };
};
