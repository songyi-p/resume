import {useRef, useState} from "react";

interface GridBoxProps {
    title : string
    className: string
}

const GridModal = ({title, className} : GridBoxProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openModal = () => dialogRef.current?.showModal();

    return (
        <>
            <button className={`${className} text-4xl md:text-xl text-white opacity-80 grid-shadow`} onClick={openModal}>
                {title}
            </button>
            <dialog ref={dialogRef}
                    className="animate-fadeIn absolute-center w-[72%] h-[68%] md:w-[90%] md:h-[54%] p-8 rounded-2xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] overflow-y-auto">
                모달임!
                <form method="dialog">
                    <button>CLOSE</button>
                </form>
            </dialog>
        </>

    )
}

export default GridModal