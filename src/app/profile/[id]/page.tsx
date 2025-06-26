export default function userProfile({ params }: any) {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center text-2xl">
        <h1> User Profile id: {params.id}</h1>
      </div>
    </>
  );
}
