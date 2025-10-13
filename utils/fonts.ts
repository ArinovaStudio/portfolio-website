import { DM_Sans, Space_Grotesk, Unbounded, Bayon, Merriweather } from "next/font/google";
import localFont from "next/font/local"

export const dm_sans = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-dm"
})

export const space = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-space"
})

export const unbounded = Unbounded({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-unbounded"
})

export const tall = Bayon({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-bayon"
})

export const cursive = Merriweather({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-mer"
})



export const strech = localFont({
      src: [
        {
          path: '../public/fonts/StretchPro.ttf',
          weight: '400',
          style: 'normal',
        }
      ],
      variable: '--font-stretch',
});
