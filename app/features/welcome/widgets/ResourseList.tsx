import ResourceItem from "~/features/welcome/components/ResourseItem";
import type {JSX} from "react";

interface Resource {
  href: string;
  text: string;
  icon: JSX.Element;
}

interface Props {
  resources: Resource[];
}


export default function ResourceList({resources}: Props) {
  return (
    <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
      <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
        What&apos;s next?
      </p>
      <ul>
        {resources.map(({href, text, icon}) => (
          <ResourceItem key={href} href={href} text={text} icon={icon}/>
        ))}
      </ul>
    </nav>
  );
}
