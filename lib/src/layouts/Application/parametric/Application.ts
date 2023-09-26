export default function defineParametricApplication() {

    return defineParametricComponent({
        container: ()=> {
            return (` <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>`)
        }
    })
}