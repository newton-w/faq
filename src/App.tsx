import { useState } from 'react'
import classNames from 'classnames'

import './index.css'
import mobile from './images/background-pattern-mobile.svg'
import desktop from './images/background-pattern-desktop.svg'
import star from './images/icon-star.svg'

function App() {

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);

  const FirstClick = () => {
    setOne((prev) => !prev)
    setTwo(true)
    setThree(true)
    setFour(true)
  }
  const SecondClick = () => {
    setTwo((prev) => !prev)
    setOne(true)
    setThree(true)
    setFour(true)
  }
  const ThirdClick = () => {
    setThree((prev) => !prev)
    setOne(true)
    setTwo(true)
    setFour(true)
  }
  const FourthClick = () => {
    setFour((prev) => !prev)
    setOne(true)
    setTwo(true)
    setThree(true)
    
  }



  return (
    <>
      <div className='h-[233px] lg:h-80 w-screen'>
        <img src={mobile} alt="" className='object-cover h-full w-screen md:hidden ' />
        <img src={desktop} alt="" className='hidden md:block object-cover h-full w-screen' />
      </div>
      <div className=' w-screen flex items-center justify-center -translate-y-[90px]  lg:-translate-y-36'>
        <div className=' mx-6 w-screen bg-white shadow-xl shadow-darkpurple/20 max-w-[600px]  rounded-xl md:rounded-3xl  '>
          <main className=' px-6'>
            <div className='flex items-center gap-7 h-[90px] lg:h-36'>
              <img src={star} alt="" className=' h-5 w-5 object-cover lg:h-12 lg:w-12' />
              <h1 className=' font-work_sans text-lg font-bold text-darkpurple lg:text-5xl'>FAQs</h1>
            </div>

            <div className='-translate-y-8 w-full'>
              <div className={classNames('group py-6 border-b border-lightpink  duration-300 h-20 relative cursor-pointer ', { ' h-52 md:h-40 ': one === false })} onClick={FirstClick}>
                <div className=' flex items-center justify-between'>
                  <p className=' font-semibold text-darkpurple w-52 md:w-full group-hover:text-purple text-sm md:text-base '>what is Frontend Mentor, and how will it help me?</p>
                  <div className={classNames('z-50 cursor-pointer  relative h-6 w-6 flex items-center justify-center rounded-full duration-300 bg-darkpurple group-hover:bg-purple', { 'rotate-180 ': one === true })} onClick={FirstClick}>
                    <div className='bg-white w-3 h-[2px] '></div>
                    <div className={classNames('bg-white w-3 h-[2px] absolute', { 'rotate-90': one === true })}></div>
                  </div>
                </div>
                <p className={classNames('absolute text-grayishpurple pt-6 -translate-y-20 duration-300 opacity-0 text-sm md:text-base', { 'translate-y-0 opacity-100': one === false })}>Frontend Mentor offers realistic coding challenges to help developers improve their coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building</p>
              </div>

              <div className={classNames('group py-6 border-b border-lightpink  duration-300 h-20 relative cursor-pointer', { ' h-52 md:h-40': two === false })} onClick={SecondClick}>
                <div className=' flex items-center justify-between'>
                  <p className='font-semibold text-darkpurple w-52 md:w-full group-hover:text-purple text-sm md:text-base'>Is Frontend Mentor free?</p>
                  <div className={classNames('z-50 cursor-pointer  relative h-6 w-6 flex items-center justify-center rounded-full duration-300 bg-darkpurple group-hover:bg-purple', { 'rotate-180 ': two === true })} onClick={SecondClick}>
                    <div className='bg-white w-3 h-[2px] '></div>
                    <div className={classNames('bg-white w-3 h-[2px] absolute', { 'rotate-90': two === true })}></div>
                  </div>
                </div>
                <p className={classNames('absolute text-grayishpurple pt-6 -translate-y-20 duration-300 opacity-0 text-sm md:text-base', { 'translate-y-0 opacity-100': two === false })}>Frontend Mentor offers free access to it's platform. While there is an additional premium features or content, the core platform and many of its resources are available for free.</p>
              </div>

              <div className={classNames('group py-6 border-b border-lightpink  duration-300 h-20 relative cursor-pointer', { ' h-52 md:h-40': three === false })} onClick={ThirdClick}>
                <div className=' flex items-center justify-between'>
                  <p className='font-semibold text-darkpurple w-52 md:w-full group-hover:text-purple text-sm md:text-base'>can I use Frontend Mentor projects on my portfolio?</p>
                  <div className={classNames('z-50 cursor-pointer  relative h-6 w-6 flex items-center justify-center rounded-full duration-300 bg-darkpurple group-hover:bg-purple', { 'rotate-180 ': three === true })} onClick={SecondClick}>
                    <div className='bg-white w-3 h-[2px] '></div>
                    <div className={classNames('bg-white w-3 h-[2px] absolute', { 'rotate-90': three === true })}></div>
                  </div>
                </div>
                <p className={classNames('absolute text-grayishpurple pt-6 -translate-y-20 duration-300 opacity-0 text-sm md:text-base', { 'translate-y-0 opacity-100': three === false })}>Absolutely! They provide practical challenges that you can use to demonstrate your proficiency in front-end development.</p>
              </div>

              <div className={classNames('group py-6 duration-300 h-20 relative cursor-pointer', { ' h-52 md:h-40': four === false })} onClick={FourthClick}>
                <div className=' flex items-center justify-between'>
                  <p className='font-semibold text-darkpurple w-52 md:w-full group-hover:text-purple text-sm md:text-base'>How can I get help if I'm stuck on a challenge?</p>
                  <div className={classNames('z-50 cursor-pointer  relative h-6 w-6 flex items-center justify-center rounded-full duration-300 bg-darkpurple group-hover:bg-purple', { 'rotate-180 ': four === true })} onClick={SecondClick}>
                    <div className='bg-white w-3 h-[2px] '></div>
                    <div className={classNames('bg-white w-3 h-[2px] absolute', { 'rotate-90': four === true })}></div>
                  </div>
                </div>
                <p className={classNames('absolute text-grayishpurple pt-6 -translate-y-20 duration-300 opacity-0 text-sm md:text-base', { 'translate-y-0 opacity-100': four === false })}>Frontend Mentor has a community forum where you can ask questions and seek help from other developers who have completed or are working on the same challenges.</p>
              </div>
            </div>
          </main>
        </div>
      </div >
    </>
  )
}

export default App
