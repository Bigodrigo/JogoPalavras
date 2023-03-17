'use client';
import Image from 'next/image'
import styles from './page.module.css'
//fbb
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase/firebase'
//react
import React, { useState } from 'react';
import { AuthContextProvider, useAuth } from "../context/Context";
//comp
import { Caixa } from '../components/caixas'
import { Input } from '../components/input'
import { trim, sort } from "../helpers/trim"

export default function Home() {
  const [ palavra, setPalavra ] = useState()
  const [show, setShow] = useState(false)
  const getPalavras = async () => {
    const docRef = doc(db, "teste", "teste");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(sort());
      //console.log("Document data:", docSnap.data());
      //encontrar uma forma de mudar o p2 para o sort!
      const teste = trim(docSnap.data().p2);
      //console.log(teste);
      setPalavra(teste)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setShow(true)
  }
  return (
    <AuthContextProvider>
      <div className='text-center '>
        <h1 className="text-3xl font-bold underline m-10">
          Pronto para adivinhar uma palavra?
        </h1>
        <button onClick={()=>getPalavras()}>Clique Aqui para começar!</button>
        { show ? <Input show={show} setShow={setShow} palavra={palavra}/> : <p> </p> }
      </div>
    </AuthContextProvider>
  )
}