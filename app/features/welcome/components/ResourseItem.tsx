import type {JSX} from "react";


export interface Props {
  href: string;
  text: string;
  icon: JSX.Element;
}

export default function ResourceItem(props: Props) {
  return (
    <li>
      <a
        className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
        {props.icon}
      </a>
    </li>
  );
}
