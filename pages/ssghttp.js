import Link from "next/link";
const SSGHttp = ({ posts }) => {
  return (
    <div className="flex flex-col mb-4 items-center justify-center min-h-screen">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-5 mt-[33vh]">
          I am a statically generated page but I also fetch some data
        </h1>

        <p className="text-3xl font-bold">
          I have been pre-rendered at build time and I use props returned from
          calling the
          <Link
            className="ml-5 text-blue-600 hover:text-blue-800 hover:underline"
            href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props"
            target="_blank"
          >
            getStaticProps()
          </Link>
          method
        </p>
        <p className="text-3xl font-bold">
          Below you can see the data I fetched behind scenes:
        </p>
        <h2 className="text-xl font-bold m-5 text-center">User Posts:</h2>
        {posts.map((p) => (
          <div
            class="bg-gray-800 text-white shadow-md rounded-lg mt-5"
            key={p.id}
          >
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{p.title}</div>
              <p>{p.body}</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-sm">Id: ${p.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SSGHttp;

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
};
