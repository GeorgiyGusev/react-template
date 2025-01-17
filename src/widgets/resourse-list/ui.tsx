import {type Resourse, ResourceItem} from "~/entities/resourse-item";

interface Props {
  resources: Resourse[];
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
