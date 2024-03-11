//imports
'use client';
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

//1(a).creating-basic-page
interface Props{}

const Page:FC<Props> = (props) => {
  return (
    <div>

      {/* 2(a).title-meta-icon */}
      <Heading title="ELearning" description="Elearning is a platform for students to learn and get help from teachers" keywords="Programming,MERN,Redux,Machine Learning" />
      {/* now, move to "./utils/ThemeProvide.tsx" */}

    </div>
  )
}

export default Page;
//now, move to "./utils/Heading.tsx" 


