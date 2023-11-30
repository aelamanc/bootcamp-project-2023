  import Image from 'next/image';
  import blogs from '@/static/blogData.ts';
  import React from 'react';

  export default function Home() {
    return (
      <>
      <main>
      <h1 className="page-title">My Website</h1>
      <div className = "about animate">
      <div className="about">
        <div className="about-text">
          <p>
            My name is <strong> Akhil Elamanchili</strong>, and I'm a 3rd-year
            <em>Computer Science</em> major and a
            <em>Statistics</em>  minor. I have a deep passion for
            <strong> Artificial Intelligence (AI)</strong> and
            <strong> Machine Learning (ML)</strong>. Exploring the endless
            possibilities of AI and ML to solve complex problems excites me.
          </p>
          <p>
            When I'm not studying or playing sports, you can often find me
            immersed in AI/ML research or working on exciting projects in the
            field. I believe that AI and ML have the potential to revolutionize
            various industries, and I'm committed to being a part of that
            transformation.
          </p>
        </div>
        <div className="about-image">
          <Image src = {"/Heisenberg.jpeg"} width = {500} height = {200} alt ="My Image"></Image>
        </div>
      </div>
    </div>
    </main>
    </>
    )    
  }



