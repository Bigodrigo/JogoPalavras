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
import { trim } from "../helpers/trim"

export default function Home() {
  const { setPalavra } = useAuth();
  const [show, setShow] = useState(false)
  const getPalavras = async () => {
    const docRef = doc(db, "teste", "teste");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setPalavra(trim(docSnap.data().p1));
      console.log(docSnap.data().p1);
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
        { show ? <Caixa show={show} setShow={setShow} /> : <p> </p> }
      </div>
    </AuthContextProvider>
  )
}