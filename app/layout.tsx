import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Acme</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </head>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}
