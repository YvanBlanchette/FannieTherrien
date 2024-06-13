import { FaFacebookF, FaGoodreadsG, FaAmazon } from "react-icons/fa6";
import { SiBabelio } from "react-icons/si";

export const theme = {
  textColor: "text-[var(--themeColor--light)]",
  hoverTextColor: "hover:text-[var(--themeColor--light)]",
  bgColor: "bg-[var(--themeColor)]",
}

export const navLinks = [
  {
    name: "accueil",
    to: "/",
  },
  {
    name: "livres",
    to: "/livres",
  },
  {
    name: "à propos",
    to: "/a-propos",
  },
  {
    name: "nouvelles",
    to: "/nouvelles",
  },
  {
    name: "me joindre",
    to: "/me-joindre",
  },
  {
    name: "boutique",
    to: "https://www.amazon.ca/s?i=stripbooks&rh=p_27%3AFannie+Therrien&s=relevancerank&language=fr&text=Fannie+Therrien&ref=dp_byline_sr_book_1",
  },
];

export const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=100028871456268",
    title: "Facebook",
  },
  {
    icon: FaGoodreadsG,
    href: "https://www.goodreads.com/author/show/15598531.Fannie_Therrien",
    title: "Goodreads",
  },
  {
    icon: SiBabelio,
    href: "https://www.babelio.com/auteur/Fannie-Therrien/440157",
    title: "Babelio",
  },
  {
    icon: FaAmazon,
    href: "https://www.amazon.ca/s?i=stripbooks&rh=p_27%3AFannie+Therrien&s=relevancerank&language=fr&text=Fannie+Therrien&ref=dp_byline_sr_book_1",
    title: "Boutique amazon",
  },
];