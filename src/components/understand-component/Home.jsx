import { useState } from "react";
import StateUnd from "../understand-state";
import Section from "./Section";

const expriences = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`
]

const educations = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident qui perferendis unde nam deserunt odio vitae! Nemo vel, harum facere fuga debitis nisi, recusandae tempore ipsum ex voluptates quibusdam temporibus!`
]

function Home () {
    return (
        <div style={{padding: '20px'}}>
            {/* <Section title={'Expriences'} items={expriences} />
            <Section title={'Educations'} items={educations} /> */}
            <StateUnd />
        </div>
    )
}

export default Home;