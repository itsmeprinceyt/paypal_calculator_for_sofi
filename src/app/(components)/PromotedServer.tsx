import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Megaphone } from "lucide-react";
import { DiscordLinkProps } from "../../types/HomePage.type";

const promotedServers: DiscordLinkProps[] = [
  { href: "https://discord.gg/HgXNs4p5cx", name: "ItsMe Prince Cove" },
  { href: "https://discord.gg/qr6tvWvkkc", name: "Trader's Lane" },
];

const DiscordLink = ({ href, name }: DiscordLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="bg-purple-200/90 hover:bg-purple-200 rounded-xl px-2 py-1 text-purple-950 shadow-lg hover:shadow-purple-600/30 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image
          src="/Discord.gif"
          fill
          sizes="32px"
          className="object-contain"
          alt="Discord"
          unoptimized
        />
      </div>
      <span className="flex-1 text-sm font-medium">{name}</span>
      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </Link>
);

export default function PromotedServers() {
  return (
    <div className="space-y-4">
      <h3 className="text-white/80 text-lg sm:text-xl font-light flex items-center justify-center gap-2">
        Promoted Discord Servers!
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto pb-14">
        {promotedServers.map((server) => (
          <DiscordLink key={server.href} {...server} />
        ))}

        <Link
          href={`https://www.itsmeprince.com/contact`}
          target="_blank"
          rel="noopener noreferrer"
          className="block group sm:col-span-2 md:col-span-3 mt-3"
        >
          <div className="bg-white/5 hover:bg-white/10 rounded-xl px-4 py-3 text-white/70 hover:text-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-3 border border-dashed border-white/20">
            <Megaphone className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">
              Want your server here? Click to contact for advertisement
            </span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
      </div>
    </div>
  );
}
