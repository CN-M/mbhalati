type socialLink = {
  name: string;
  href: string;
  darkIcon: string;
  lightIcon: string;
};

import xTwitter from "@/public/icons/brands-footer/Frame-1.svg";
import dribbble from "@/public/icons/brands-footer/Frame-2.svg";
import linkedIn from "@/public/icons/brands-footer/Frame-3.svg";
import instagram from "@/public/icons/brands-footer/Frame-4.svg";
import github from "@/public/icons/brands-footer/Frame.svg";
import spotify from "@/public/icons/brands-footer/Vector.svg";

import xTwitter_light from "@/public/icons/brands/Frame-1.svg";
import dribbble_light from "@/public/icons/brands/Frame-2.svg";
import linkedIn_light from "@/public/icons/brands/Frame-3.svg";
import instagram_light from "@/public/icons/brands/Frame-4.svg";
import github_light from "@/public/icons/brands/Frame.svg";
import spotify_light from "@/public/icons/brands/Vector.svg";

export const socialLinks: socialLink[] = [
  {
    name: "Github",
    darkIcon: github,
    lightIcon: github_light,
    href: "https://github.com/cn-m",
  },
  {
    name: "Twitter",
    darkIcon: xTwitter,
    lightIcon: xTwitter_light,
    href: "https://x.com/cn_mbhalati",
  },
  {
    name: "LinkedIn",
    darkIcon: linkedIn,
    lightIcon: linkedIn_light,
    href: "https://www.linkedin.com/in/c-n-mbhalati-a6526716a/",
  },
  {
    name: "Dribbble",
    darkIcon: dribbble,
    lightIcon: dribbble_light,
    href: "https://dribbble.com/cn_mbhalati",
  },
  {
    name: "Instagram",
    darkIcon: instagram,
    lightIcon: instagram_light,
    href: "https://www.instagram.com/c.n.mbhalati",
  },
  {
    name: "Spotify",
    darkIcon: spotify,
    lightIcon: spotify_light,
    href: "https://open.spotify.com/show/2tsu1q7KYNAbPIhCFSgxYL",
  },
];
