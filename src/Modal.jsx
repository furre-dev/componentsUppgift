import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai"

export default function Modal(props) {
    const { children, show, onClose, size } = props;

    const modalProps = {
        show: {
            true: "",
            false: "hidden"
        },
        size: {
            small: "w-[30rem] h-[30rem]",
            medium: "w-[40rem] h-[30rem]",
            large: "w-[50rem] h-[40rem]"
        }
    }

    return (
        <div className={`bg-[#00000097] w-screen h-screen fixed top-0 ${modalProps.show[show]}`}>
            <div className="flex justify-center items-center h-full">
                <div className={`bg-gray-500 ${modalProps.size[size]} flex flex-col text-center justify-center items-center p-3 space-y-10 rounded-2xl relative`}>
                    <div className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>
                        <AiFillCloseCircle color="white" size={"2rem"} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}


function Header(props) {
    const { children } = props;

    return (
        <div>
            <h1 className="text-2xl">{children}</h1>
        </div>
    )
}

function Body(props) {
    const { children } = props;

    return (
        <p>{children}</p>
    )

}

function Footer(props) {
    const { children, onClose } = props;

    return (
        <button className="bg-cyan-600 py-2 w-full rounded-3xl text-white" onClick={onClose}>{children}</button>
    )

}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;