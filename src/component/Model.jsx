import React, { useState } from 'react'
import "../css/Model.css"

export default function Model() {
    const [ShowModel, setShowModel] = useState(false)
    const [mytrue, setMytrue] = useState(false)
    const [alwayson, setAlwaysOn] = useState(true)
    const [ans , setAns] = useState("Accepted")


    const MyModal = () => {
        return (
            <>
                <div className="model-container">
                    <div className="data-model">
                        <h1>Welcome to model</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur reprehenderit quae laboriosam ipsa molestiae itaque dolorem tempora labore unde dolorum, tenetur esse nihil, accusantium provident laudantium aliquam quidem obcaecati! Fugit, voluptates!</p>
                        <button onClick={() => {
                            setMytrue(true)
                            setShowModel(false)
                            setAlwaysOn(false)
                        }} value={"Accepted"} >Accept it</button>
                        <button onClick={() => {
                            setMytrue(true)
                            setShowModel(false)
                            setAlwaysOn(true)
                            setAns("Rejected")
                        }} value={"Rejected"} >Reject it</button>
                    </div>
                </div>
            </>
        )
    }
    const Mytrue = () => {
        try {
            console.log(krish) //throw the error bcz krish is not defined
        } catch (error) {
            console.log("error")
        }
        return (
            <>
                <h1>you {ans} it</h1>
               
            </>
        )
    }
    const AlwaysOn = () => {
        return (
            <>
                <div className="main-container">
                    <button onClick={() => {
                        {
                            setShowModel(true)
                            setAlwaysOn(false)
                        }
                        setMytrue(false)
                    }} >Open it</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint iste provident ad culpa dolore repellendus veritatis iusto minus, est minima at blanditiis facilis officia dolor sit nemo obcaecati porro nulla possimus.</p>

                </div>
            </>
        )
    }
    return (
        <>
            {mytrue && <Mytrue />}
            {alwayson && <AlwaysOn />}
            {ShowModel && <MyModal />}


        </>
    )
}
