import { game, Graphic, Moniters, Smartwatch, Storage, Television, Express, Return, Support, Premium, Gift, Ratingstar, HeartSvg, ShopSvg } from "./icons";
import pcImg from "../assets/images/png/pc-img.png"
import routerImg from "../assets/images/png/router-img.png"
import chairImg from "../assets/images/png/chair-img.png"
import popularPc from "../assets/images/png/popular-pc-img.png"
import popularGraphic from "../assets/images/png/popular-graphic-img.png"
import popularChair from "../assets/images/png/popular-chair-img.png"
import moniterPC from "../assets/images/png/monter-img.png"



export const MARQUE_DATA = [
    {
        icon: game,
        name: "Game",
    },
    {
        icon: Storage,
        name: "Storage (SSD)",
    },
    {
        icon: Graphic,
        name: "Graphic Card",
    },
    {
        icon: Television,
        name: "Televisions",
    },
    {
        icon: Smartwatch,
        name: "Smartwatch",
    },
    {
        icon: Moniters,
        name: "Monitors",
    },
    {
        icon: game,
        name: "Game",
    },
    {
        icon: Storage,
        name: "Storage (SSD)",
    },
    {
        icon: Graphic,
        name: "Graphic Card",
    },
    {
        icon: Television,
        name: "Televisions",
    },
    {
        icon: Smartwatch,
        name: "Smartwatch",
    },
    {
        icon: Moniters,
        name: "Monitors",
    },
    {
        icon: game,
        name: "Game",
    },
    {
        icon: Storage,
        name: "Storage (SSD)",
    },
    {
        icon: Graphic,
        name: "Graphic Card",
    },
    {
        icon: Television,
        name: "Televisions",
    },
    {
        icon: Smartwatch,
        name: "Smartwatch",
    },
    {
        icon: Moniters,
        name: "Monitors",
    }
];

export const SERVICES_DATA = [
    {
        icon: Express,
        text: "Express Delivery",
        para: "Order Now",
    },
    {
        icon: Return,
        text: "Easy Return ",
        para: "30 days return",
    },
    {
        icon: Support,
        text: "24/7 Support",
        para: "Premium Services",
    },
    {
        icon: Premium,
        text: "Premium Warranty",
        para: "Up to 2 years",
    },
    {
        icon: Gift,
        text: "Best Special Gift",
        para: "For Order",
    },
];

export const BESTSELLER_DATA = [
    {
        img: pcImg,
        title: "Vortex Gaming PC",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "  ₹249.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: routerImg,
        title: "D-Link ADSL Wireless Router DSL2790U",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "  ₹249.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: chairImg,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "  ₹249.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: moniterPC,
        title: "Acer Nitro 27\" Gaming Monitor",
        description: "Ultra-smooth visuals with a 165Hz refresh rate and 1ms response time for a competitive edge.",
        price: "  ₹349.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    }
];

export const POPULAR_DATA = [
    {
        img: popularPc,
        title: "NZXT H510 Elite PC Case",
        description: "Tempered glass case with clean cable management and optimized airflow.",
        price: "  ₹249.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: popularGraphic,
        title: "MSI GeForce RTX 4070 GPU",
        description: "Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.",
        price: "  ₹349.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: popularChair,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "  ₹249.99",
        svg: Ratingstar,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
];

export const GRIDSTYLE_CLASS = [
    "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 bg-[#D5E8FF]",
    "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 bg-[#EEF4FB]",
    "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 sm:col-span-2 sm:row-start-2 sm:row-end-3 bg-[#E5E4E2]",
    "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 bg-[#EEF4FB]",
    "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 bg-[#E5E4E2]",
    "lg:col-span-2 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 sm:col-span-2 sm:row-start-4 sm:row-end-5 bg-[#D5E8FF]",
];

export const IMAGESTYLE_CLASS = [
    "sm:max-w-[372px] max-w-[246px] right-0 bottom-0 ml-auto w-full sm:min-h-[261px]",
    "sm:max-w-[250px] max-w-[157px] right-1/2 lg:translate-x-1/2 -bottom-6 w-full sm:min-h-[213px]",
    "sm:max-w-[184px] max-w-[162px] right-1/2 lg:translate-x-1/2 bottom-3 w-full sm:min-h-[208px]",
    "sm:max-w-[306px] max-w-[294px] sm:left-0 sm:bottom-0 w-full sm:min-h-[261px] max-sm:-rotate-90 -right-4 bottom-4",
    "sm:max-w-[266px] max-w-[198px] right-1/2 lg:translate-x-1/2 bottom-[18px] w-full sm:min-h-[187px]",
    "right-0 top-0 bottom-0 left-0 w-full z-0",
];

export const HEADINGSTYLE_DATA = [
    "max-w-[172px] w-full xl:ml-[62px] sm:ml-[30px] xl:mt-[117px] mr-auto ml-6 mt-6",
    "max-w-[213px] w-full text-center mx-auto sm:mt-8 mb-[46px] sm:mb-0",
    "w-full text-center mt-[34px] mb-[39px] sm:mb-0",
    "max-w-[196px] w-full sm:absolute sm:mt-[26px] sm:mr-4 top-6 left-6 ml-auto",
    "w-full text-center sm:mt-2.5 mb-[44px] sm:mb-0",
    "text-center sm:mt-12 mb-[50px] sm:mb-0",
];
