export default function SSG() {
  return (
    <div className="flex flex-col mb-4 items-center justify-center h-screen">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-5">
          I am a statically generated page
        </h1>

        <p className="text-3xl font-bold">
          My contents have been generated on the server initially and are just
          reused, I never change.
        </p>
        <p className="text-3xl font-bold">
          I have been statically generated at build time and I am served to the
          client. You can cache my contents for an even faster delivery (maybe
          through a CDN).
        </p>
      </div>
    </div>
  );
}
