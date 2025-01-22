"use client";
import Link from "next/link";
import bs58 from "bs58";
import Image from "next/image";

const TraderLinks = ({
  tokenAddress,
  size = 16,
  radius = 6,
  visibleLinks = 3,
  gap = 12,
}: {
  tokenAddress: string;
  size?: number;
  radius?: number;
  visibleLinks?: number;
  gap?: number;
}) => {
  const params = bs58.encode(
    Buffer.from(`f_757988597--chain_sol--contract_${tokenAddress}`)
  );

  const CUSTOM_LINKS = [
    {
      name: "Gmgn",
      // url: `https://gmgn.ai/sol/token/ujYRRPpd_${tokenAddress}`,
      url: `https://gmgn.ai/sol/token/${tokenAddress}`,
      icon: "/link/gmgn.png",
      event: "gmgn.ai",
    },
    {
      name: "Bitget",
      url: `https://t.me/BitgetWallet_TGBot/BGW?startapp=quoteInfo-${params}`,
      icon: "/link/bitget.png",
      event: "bitget.com",
      br: 50,
    },
    {
      name: "Ave",
      // url: `https://ave.ai/token/${tokenAddress}-solana?ref=fiacc218`,
      url: `https://ave.ai/token/${tokenAddress}-solana`,
      icon: "/link/ave.png",
      event: "ave.ai",
    },
    {
      name: "Photon",
      // url: `https://photon-sol.tinyastro.io/en/r/@pumpnews/${tokenAddress}`,
      url: `https://photon-sol.tinyastro.io/en/lp/${tokenAddress}`,
      icon: "/link/photon.png",
      event: "photon-sol.tinyastro.io",
    },
    {
      name: "Bullx",
      // url: `https://bullx.io/terminal?chainId=1399811149&address=${tokenAddress}&r=TID2ZSZSNQE`,
      url: `https://bullx.io/terminal?chainId=1399811149&address=${tokenAddress}`,
      icon: "/link/bullx.svg",
      event: "bullx.io",
    },
    {
      name: "UniversalX",
      // url: `https://universalx.app/tokens/101_${tokenAddress}?inviteCode=PUMPNW`,
      url: `https://universalx.app/tokens/101_${tokenAddress}`,
      icon: "/link/universaix.svg",
      event: "universalx.app",
    },
    {
      name: "Trojan",
      // url: `https://t.me/diomedes_trojanbot?start=r-bob6112-${tokenAddress}`,
      url: `https://t.me/diomedes_trojanbot?start=${tokenAddress}`,
      icon: "/link/trojan.svg",
      event: "t.me/diomedes_trojanbot",
    },
    {
      name: "GMGN Sniper Bot",
      // url: `https://t.me/GMGN_sol_bot?start=i_ujYRRPpd_c_${tokenAddress}`,
      url: `https://t.me/GMGN_sol_bot?start=${tokenAddress}`,
      icon: "/link/gmgn_sniper_bot.png",
      event: "t.me/GMGN_sol_bot",
    },
  ];

  const LinkItem = ({
    name,
    url,
    icon,
    event,
    br,
  }: {
    name: string;
    url: string;
    icon: string;
    event: string;
    br?: number;
  }) => {
    return (
      <div
        className={`notranslate flex w-full cursor-pointer items-center gap-1 bg-[rgba(255,255,255,0.1)] p-1 text-[14px]`}
        style={{
          borderRadius: `${radius}px`,
        }}
      >
        <Image alt="" src={icon} width={size} height={size} />
      </div>
    );
  };

  return (
    <div style={{ gap: `${gap}px` }} className={`flex w-max items-center mt-2`}>
      {CUSTOM_LINKS.map((link) => (
        <Link
          key={link?.name}
          href={link?.url ?? CUSTOM_LINKS[0]?.url ?? ""}
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <LinkItem {...link} />
        </Link>
      ))}
    </div>
  );
};

export default TraderLinks;
