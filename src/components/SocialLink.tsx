import Link from "next/link";
import { twMerge } from "tailwind-merge";
import FramerWrapper from "./animations/FramerWrapper";
import { IconBrandFacebook, IconBrandGmail, IconBrandLinkedin } from "@tabler/icons-react";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: "http://facebook.com/nhatquach1711",
      icon: IconBrandFacebook,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/minh-nh%E1%BA%ADt-qu%C3%A1ch-9b0775256/",
      icon: IconBrandLinkedin,
    },
    {
      name: "Gmail",
      link: "mailto: quachminhnhat1711@gmail.com",
      icon: IconBrandGmail,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link target="blank" href={itm.link}>
              <itm.icon className={twMerge("h-4 w-4 flex-shrink-0")} />
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
