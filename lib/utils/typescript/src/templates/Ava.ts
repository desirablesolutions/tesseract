import $template from "../template"

const Ava = $template({
    name: "ava",
    template: (props) => {
        return {
            fg: [],
            bg: [],
            text: [],
            headings: [],
            fx: [],
            ...props
        }
    },
    meta: {
        tags: "Confident, Daring, Striking",
        description: `Blake Boldness showcases a daring design with bold typography,
                      vibrant colors, and strong geometric shapes, making an impactful 
                      and memorable statement.`
    }
})

export default Ava
