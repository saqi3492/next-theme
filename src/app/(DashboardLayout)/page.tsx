import { redirect } from "next/navigation";

const Page = () => {
  redirect("/sessions");
  return null;
};

export default Page;
