export default function Badge(props) {
    const { size, color, icon } = props;

    const badgeProps = {
        size: {
            small: "aspect-square w-10 text-lg",
            medium: "aspect-square w-14 text-2xl",
            large: "aspect-square w-20 text-3xl"
        },
        color: {
            cyan: "bg-cyan-500",
            blue: "bg-blue-500",
            red: "bg-red-500"
        }
    }

    return (
        <div className={`${badgeProps.size[size]} ${badgeProps.color[color]} rounded-full
                        flex justify-center items-center`}>
            {icon}
        </div>
    )



}