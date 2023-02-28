import Head from 'next/head'
import React, {FormEvent, useEffect, useRef, useState} from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsFillCaretDownFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import GridModal from "@/components/GridModal";
import GridSlider from "@/components/GridSlider";
import Image from "next/image";

export default function Home() {
    const [companyName, setCompanyName] = useState('');
    const nameRef = useRef<HTMLLIElement | null>(null);

    const onSubmit = (e:FormEvent<HTMLFormElement>) => e.preventDefault();

    const onChangeName = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setCompanyName(value);
    }

    const submitNameBtn = () => nameRef.current?.scrollIntoView({behavior: "smooth"});

    const onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if (key === 'Enter') {
            submitNameBtn();
        }
    };


  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <section className='item'>
              <header>
                  <nav className='flex items-center bg-dark-green h-[60px]'>
                      <div className='flex items-baseline text-white'>
                          <h1 className='text-2xl md:text-lg ml-5 mr-10 cursor-pointer'>Resume</h1>
                          <div className='md:text-sm mr-10 md:mr-6 cursor-pointer'>Business Card</div>
                          <div className='md:text-sm cursor-pointer'>introduce-myself</div>
                      </div>
                  </nav>
              </header>
              <section className='flex-full-center flex-col'>
                  <h2 className='text-3xl md:text-lg font-serif text-deep-dark-green mb-8'>
                      열람하시는 회사의 이름을 입력해 주세요.
                  </h2>
                  <form name={'submit_company_name'} onSubmit={onSubmit} className='md:w-[90%] flex gap-5 md:gap-3 mb-6'>
                      <input className='w-[500px] h-[50px] rounded-3xl border-solid border-2 border-dark-green px-12 md:px-4'
                             onChange={onChangeName}
                             onKeyDown={onKeyEnter}
                             required
                             maxLength={15}
                             type="text"
                             placeholder="Please write down your company name."/>
                      <button type={'button'} onClick={submitNameBtn} className='bg-dark-green text-white px-4 rounded-3xl shadow-[1px_1px_0.5rem_#808e95]'>
                          Click
                      </button>
                  </form>
                  <div className='text-sm md:text-xs font-serif mb-16'>( 회사에 대한 정보는 저장하지 않습니다. )</div>
              </section>
          </section>
          <section ref={nameRef} className='item'>
              <section className='relative flex-full-center'>
                  <div className={`${companyName !== '' && 'animate-flip'} flex flex-col justify-end text-white bg-dark-green border-all w-[330px] md:w-[90%] h-[500px] p-8 shadow-[10px_10px_2px_#808e95]`}>
                      <h2 className="font-normal">박 &nbsp;송 &nbsp;이</h2>
                      <ul className="flex-info">
                          <li className="animate-pulse text-2xl mt-5 mb-2 tracking-wider">{companyName}</li>
                          <li className="text-sm mb-5">Frontend Developer</li>
                          <li className="text-xs mb-2">Tel) 010-8797-3323</li>
                          <li>
                              <MdOutlineEmail/>
                              <a href="mailto:songyi7091@gmaile.com">songyi7091@gmail.com</a>
                          </li>
                          <li>
                              <BsGithub/>
                              <a href="https://github.com/songyi-p/">https://github.com/songyi-p/</a>
                          </li>
                          <li>
                              <SlNote/>
                              <a href="https://velog.io/@songyi7091">https://velog.io/@songyi7091</a>
                          </li>
                      </ul>
                  </div>
                  <BsFillCaretDownFill className="animate-bounce absolute bottom-2 text-dark-green" size="24"/>
              </section>
          </section>
          <section className='item'>
              <section className='flex-full-center'>
                  <div className="relative grid-box w-[68%] h-[76%] md:w-[90%] md:h-[50%] md:gap-4">
                      <GridModal title="# Who?" className="item-a bg-dark-green"/>
                      <Image
                          src="/images/me.jpg"
                          alt="박송이"
                          fill
                          className="item-b object-cover"
                      />
                      <GridModal title="# What?" className="item-c bg-blue-green"/>
                      <GridModal title="# What?" className="item-d bg-olive-green"/>
                      <GridSlider/>
                  </div>
              </section>
          </section>
      </main>
    </>
  )
}
