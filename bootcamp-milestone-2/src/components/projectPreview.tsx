import React from "react";
import style from "./projectPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import {IPort} from "@/database/portfolioSchema"

export default function ProjectPreview(props: IPort) {
  return (
    <div className={style.project}>
      <Image
        src={props.image}
        width={300}
        height={500}
        alt="A website showcasing my profile and projects"
      ></Image>
      <div className={style.project_details}>
        <strong className={style.project_name}>
          <strong>{props.title}</strong>
        </strong>
        <p className={style.project_description}>{props.description}</p>
        <Link href={props.slug}>Learn More</Link>
      </div>
    </div>
  );
}