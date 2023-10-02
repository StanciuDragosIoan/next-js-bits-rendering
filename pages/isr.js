import Link from "next/link";
const ISR = ({ posts }) => {
  return (
    <div className="flex flex-col mb-4 items-center justify-center min-h-screen">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-5 mt-[33vh]">
          I am a statically generated page but I also fetch some data and I
          revalidate my contents every 10 seconds
        </h1>

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
          method to fetch data behind the scene.
        </p>
        <p className="text-3xl font-bold">
          Below you can see the data I fetched behind scenes:
        </p>

        <h2 className="text-xl font-bold m-5 text-center">Posts Data:</h2>
        {posts.map((p) => (
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

export default ISR;

export const getStaticProps = async (context) => {
  console.log("getStaticProps invoked");
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { next: { revalidate: 1 } }
  );

  const posts = await data.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
};
