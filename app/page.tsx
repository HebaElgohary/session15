import AddUser from "@/src/modules/user/components/AddUser";
import GetUsers from "@/src/modules/user/components/GetUsers";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <GetUsers />
     <AddUser />
    </div>
  );
}
