import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma?.user.findMany();

  return (
    <div>
      <h1>Page</h1>
      <ul>{JSON.stringify(users)}</ul>
    </div>
  );
};

export default Page;
