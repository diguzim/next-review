import Image from "next/image"
import Link from "next/link"

export const HomeLink = () => {
  return (
    <Link href="/">
      <Image
        priority
        src="/images/Gaz'Haragoth.gif"
        height={64}
        width={64}
        alt="Gaz\'Haragoth"
      />
    </Link>
  )
}