export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
  
  const blogs: Blog[] = [
    {
      title: "Blog 1",
      date: "2023-10-01",
      description: "Premier League",
      slug: "blog-1",
    },
    {
      title: "Blog 2",
      date: "2023-10-20",
      description: "NBA",
      slug: "blog-2",
    },
  ];
  
  export default blogs;
  