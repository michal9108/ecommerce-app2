import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
  Roboto as FontRoboto
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const roboto = FontRoboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto",
})
