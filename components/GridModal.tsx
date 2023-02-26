import {useRef, useState} from "react";

interface GridBoxProps {
    title : string
    color : string
    className: string
}

const GridModal = ({color, title, className} : GridBoxProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openModal = () => dialogRef.current?.showModal();

    return (
        <>
            <button className={className} onClick={openModal}>
                {title}
            </button>
            <dialog ref={dialogRef}
                    className="absolute-center w-[72%] h-[68%] p-8 rounded-2xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] overflow-y-scroll">
                모달임!
                <form method="dialog">
                    <button>CLOSE</button>
                </form>
            </dialog>
        </>

    )
}

export default GridModal