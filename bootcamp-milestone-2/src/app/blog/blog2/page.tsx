import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
export default function Blog2(){
    return(
        <>
        <main>
      <h1 className="page-title">Blog 2</h1>
      <div className="blog-content">
        <h2>NBA 2023-24 Season</h2>
        <p>Date: 2023-10-20</p>
        <Image src={"/NBA.jpg"} width = {300} height = {200}alt="Blog 2 Image"></Image>
        <p>
          The National Basketball Association (NBA) is a premier professional
          basketball league in the United States, and it ranks among the world's
          top basketball leagues. Comprising 30 teams, the NBA is known for its
          high-level competition, featuring some of the most talented basketball
          players globally. With a regular season followed by playoffs, the
          league captivates fans with its fast-paced and dynamic style of play.
          The NBA has a rich history, iconic franchises like the Los Angeles
          Lakers and Boston Celtics, and it serves as a global ambassador for
          the sport of basketball, influencing and entertaining fans worldwide.
        </p>
      </div>
    </main>
        </>
    )
}