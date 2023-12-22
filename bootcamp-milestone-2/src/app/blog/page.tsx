import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
      // query for all blogs and sort by date
      const blogs = await Blogs.find().sort({ date: -1 }).orFail();
      // send a response as the blogs as the message
      return blogs;
  } catch (err) {
      return null;
  }
}

export default function Blog() {
  return getBlogs().then((blogs)=> {
      return (
          <main>
              <h1 className="blog">Blog</h1>
              <div className="blog-container">
                  {blogs?.map((blog) => (
                      <BlogPreview 
                          title={blog.title}
                          slug={blog.slug}
                          date={blog.date}
                          description={blog.description}
                          content = {blog.content}

                      />
                  ))}
              </div>
          </main>
      );
  });
}
// import React from "react";
// import PageTitle from "@/components/page-title";
// import BlogPreview from '@/components/blogPreview';
// // import {blogs} from "@/app/blogData";
// import connectDB from '@/helpers/db';
// import Blogmod from '@/database/blogSchema';

// async function getBlogs(){
// 	await connectDB() // function from db.ts before

// 	try {
// 			// query for all blogs and sort by date
// 	    const blogs = await Blogmod.find().sort({ date: -1 }).orFail()
// 			// send a response as the blogs as the message
// 	    return blogs
// 	} catch (err) {
// 	    return null
// 	}
// }

// export default async function Blog() {
//   const blogs = await getBlogs();
//   if (blogs){
//   return (
//     <>
//     <main className="container">
//         <PageTitle title="Blog"/>

//         {blogs.map(blog => 
//             <BlogPreview // This is how we call the component
//             title={blog.title}
//             slug = {blog.slug}
//             date={JSON.stringify(blog.date)}
//             description={blog.description}
//             content={blog.content}
//             comments={blog.comments}
//             link={blog.link}
//             image = {blog.image}
//           />
// 		)}
//     </main>
//     </>
//   )
//   }else {
//       //no blogs are found
//           return (
//             <>
//               <main>
//                 <h1>No Blog Found</h1>
//               </main>
//             </>
//           );
//         }
// }
