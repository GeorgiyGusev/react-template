import Header from "~/features/welcome/widgets/Header";
import ResourceList from "~/features/welcome/widgets/ResourseList";
import type {JSX} from "react";
import Clicker from "~/features/welcome/widgets/Clicker";
import {NavLink} from "react-router";

interface Resource {
  href: string;
  text: string;
  icon: JSX.Element;
}

interface Props {
  resources: Resource[];
}


export default function Welcome({resources}: Props) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <Header/>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <ResourceList resources={resources}/>
        </div>
        <Clicker/>
        <NavLink to={"/"}>Back to home</NavLink>
      </div>
    </main>
  )
}
