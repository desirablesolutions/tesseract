export default function defineVariadicApplication({children}) {
    return (
        <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    )
}