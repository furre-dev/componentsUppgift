export default function Button(props) {
    const size = props.size;
    const color = props.color;
    const disabled = props.disabled;

    console.log(color)

    const buttonProps = {
        size: {
            small: "py-1 px-2",
            large: "py-2 px-4"
        },
        color: {
            cyan: "bg-cyan-500",
            blue: "bg-blue-500",
            red: "bg-red-500"
        }
    }

    return (
        (disabled ?
            <button className={`border border-2 rounded-lg opacity-60 border-black ${buttonProps.color[color]} ${buttonProps.size[size]}`} disabled > Button</button >
            :
            <button className={`border border-2 rounded-lg border-black px-2 ${buttonProps.color[color]} ${buttonProps.size[size]}`}>Button</button>)


    )
}