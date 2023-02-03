export default function Card(props) {
    const { href, imgSrc, imgAlt, title } = props;

    return (
        <div className="w-[20rem] h-[30rem] bg-black">
            <div className="h-[50%]  overflow-hidden">
                <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
            </div>
            <div className="h-[50%] max-w-[90%] mx-auto flex flex-col justify-around items-center text-white text-center">
                <h1 className="text-3xl">{title}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href={href} target="_blank" className="bg-cyan-500 text-gray-100 py-1 px-10 rounded-lg">Learn more!</a>
            </div>
        </div>
    )
}