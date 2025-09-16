import { NavItems } from "@/data/navItems"
import Link from "next/link"

interface navItems {
    name: string
    href: string
}
const Navigation = () => {
    return (
        <>
            {NavItems.map((item, index) => (
                <Link className="flex hover:text-amber-700 text-2xl gap-4" href={item.href} key={index}>{item.name} </Link>
                ))
            }
        </>
    )
}
export default Navigation