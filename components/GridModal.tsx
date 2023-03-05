import {useRef, useState} from "react";
import { CgCloseR } from "react-icons/cg";
import BaseLayoutProps from "@/types/BaseLayoutProps";

interface GridBoxProps extends BaseLayoutProps {
    title : string
    className: string
}

const GridModal = ({title, className, children} : GridBoxProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openModal = () => dialogRef.current?.showModal();

    return (
        <>
            <button className={`${className} px-4 text-3xl md:text-xl text-white opacity-80 grid-shadow`} onClick={openModal}>
                {title}
            </button>
            <dialog ref={dialogRef}
                    className="animate-fadeIn relative absolute-center w-[72%] h-[68%] md:w-[90%] p-8 md:p-4 rounded-2xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] overflow-y-auto">
                {children}
                <form method="dialog">
                    <button className="absolute top-4 right-5">
                        <CgCloseR size={24}/>
                    </button>
                </form>
            </dialog>
        </>

    )
}

export default GridModal