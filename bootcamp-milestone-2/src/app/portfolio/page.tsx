import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ProjectPreview from '@/components/projectPreview';
import connectDB from "@/helpers/db";
import Project from "@/database/portfolioSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  if (projects) {
    return (
      <>
        <main>
          <h1 className="page-title">Akhil's Portfolio</h1>
          {projects.map((project) => (
            <ProjectPreview
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <h1>No Projects Found</h1>
        </main>
      </>
    );
  }
}
