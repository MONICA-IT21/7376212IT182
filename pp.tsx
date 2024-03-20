import { useEffect } from "react";
import { useState } from 'react'

async function fetchdata() {
    try{
        const res = await fetch('http://20.244.56.144/products/register')
        const data =res.json();
        return data;

    }
    catch(err){
        console.log(err);

    }
    
}
useEffect(()=> {
    console.log(fetchdata());
})

