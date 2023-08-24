export default function Hero() {

    return defineComponent({
        variant: "parametric",
        variants: [

        ],
        renderer: "react",
        template: () => (
            `<main>
            {{ children}}
            </main>`
        )
    })
}