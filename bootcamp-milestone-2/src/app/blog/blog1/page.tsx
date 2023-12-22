import Image from 'next/image';
import React from 'react';

export default function Blog2(){
    return(
        <>
        <main>
      <h1 className="page-title">Blog 1</h1>
      <div className="blog-content">
        <h2>Premier League 2023-24 Season</h2>
        <p>Date: 2023-10-01</p>
        <Image src= {"/PremierLeague.jpg"} width = {300} height = {200} alt="Blog 1 Image"></Image>
        <p>
          The Premier League is one of the most popular and competitive football
          leagues in the world. Based in England, it features 20 top-tier
          football clubs that compete against each other in a round-robin
          format, with each team playing 38 matches in a season. Known for its
          passionate fan base, high-stakes matches, and top-quality
          international talent, the Premier League has a global following and a
          reputation for delivering thrilling football action. With clubs like
          Manchester United, Liverpool, and Manchester City among its ranks, the
          league consistently showcases some of the best talent and footballing
          drama, making it a must-watch for football enthusiasts worldwide.
        </p>
      </div>
    </main>
        </>
    ) 
}