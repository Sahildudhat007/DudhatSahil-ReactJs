import React from 'react'
import { useRef, useState } from 'react'
import data from './data'

import './accordion.css'

import { RiArrowDropDownLine } from 'react-icons/ri'

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {

    const contentHeight = useRef()

    return (
        <div className="wrapper" >
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                <p className='question-content'>{question}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
            </button>

            <div ref={contentHeight} className="answer-container" style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <div className='container'>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Accordion