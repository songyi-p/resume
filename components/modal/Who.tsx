import GridModal from "@/components/GridModal";
import React, {useState} from "react";
import BaseLayoutProps from "@/types/BaseLayoutProps";
import {BsFillCaretDownFill} from "react-icons/bs";

interface InitialProps extends BaseLayoutProps {
    initial : string,
    word : string,
}

const Initial = ({initial, word, children} : InitialProps) => {
    const [showDesc, setShowDesc] = useState(false);

    const onClickWord = () => setShowDesc(prev => !prev);

    return (
        <div className="flex items-center md:flex-col md:items-center md:gap-3 my-16 md:my-8 laptop:my-8">
            <div className="initial">{initial}</div>
            <button onClick={onClickWord} className="w-28 md:w-24 p-4 md:p-3 ml-6 mr-10 md:mx-0 text-center blue-btn rounded-lg">
                {word}
            </button>
            {
                showDesc &&
                <div className="animate-fadeIn p-3 border-solid-gray leading-6 md:text-sm rounded-lg desc-shadow">
                    {children}
                </div>
            }
        </div>
    )
}

const Who = () => {
    return (
        <GridModal title="# Who?" className="item-a bg-dark-green">
            <h2 className="flex items-center my-6 laptop:my-4 text-4xl md:text-base">
                저의 이름은
                <div className="initial">P</div>
                <div className="initial">S</div>
                <div className="initial">Y</div>
                입니다.
            </h2>
            <Initial initial="P" word="Priority">
                <b>올해 저의 목표</b>입니다. <br/>
                나아갈 길에 대한 이정표 🚩는 우선순위에 대한 고찰로부터 만들어진다고 생각합니다.
            </Initial>
            <Initial initial="S" word="Spirit">
                건강한 정신과 긍정적인 마인드의 중요성을 알고 있습니다.<br/>
                건강한 정신력을 바탕으로 <b>좋은 기운을 나눌 수 있는 사람</b>이 되고자 합니다 ☺️
            </Initial>
            <Initial initial="Y" word="Yesterday">
                <b>어제를 되돌아보는 것의 가치를 믿는 사람</b>입니다.<br/>
                {`1주 회고를 기록해오며 '성장'이란 👣`}<br/>
                어제보다 나은 내가 아닌, 어제의 미숙함을 받아들이는 과정임을 배우고 있습니다.
            </Initial>
            <h3 className="mt-32 laptop:mt-18 md:mt-8 text-2xl md:text-sm flex justify-end items-end">
                저는 프론트엔드 개발자
                <span className="px-2 text-4xl md:text-2xl text-blue">박송이</span>입니다.
            </h3>
            <BsFillCaretDownFill className="animate-bounce md:hidden absolute bottom-4 right-8 text-dark-green" size="24"/>
        </GridModal>
    )
}

export default Who