import { AiOutlineCloseCircle } from "react-icons/ai"

export default function Alert(props) {
    const color = props.color;
    const icon = props.icon;
    const onDismiss = props.onDismiss;

    const alertProps = {
        color: {
            cyan: "bg-cyan-500",
            blue: "bg-blue-500",
            red: "bg-red-500"
        }
    }

    return (
        <div className={`flex justify-between px-10 items-center rounded-3xl h-24 w-[40rem] ${alertProps.color[color]}`}>
            <div className="flex space-x-2 justify-center items-center
                            text-3xl text-white">
                {icon}
                <h1>This is an alert!</h1>
            </div>
            <button onClick={() => onDismiss("Dismissed!")} className="text-4xl">
                <AiOutlineCloseCircle color="black" />
            </button>
        </div>
    )
}