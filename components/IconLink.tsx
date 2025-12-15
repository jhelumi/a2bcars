import { AlignVerticalJustifyCenter } from "lucide-react";
import Link from "next/link";

interface IconLinkProps {
  Icon: React.ElementType
  children: React.ReactNode;
  href: string;
  className: string;
}

export default function IconLink(props :IconLinkProps) {
   const IconInc = props.Icon;

    return (
        <Link href={props.href} passHref>
           <div className="flex flex-col items-center justify-center">
                <IconInc color="#59abe3"/>
                <div className="text-xs text-white font-bold">
                    {props.children}
                </div>
           </div>
        </Link>
    );
}