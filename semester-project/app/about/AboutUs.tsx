'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import AboutBox from "./AboutBox";
import FaqsBox from "./FaqsBox";
import MoreQBox from "./MoreQBox";
function About() {
    
    return <>
    <AboutBox/>
    <FaqsBox/>
    <MoreQBox/>
    
    </>
}

export default About;