export type Blog = {
  title: string;
  date: Date;
  description: string;
  slug: string;
}

const blogs: Blog[]= [
  {
      title: "Blog 1",
      date: new Date("2023-10-01"),
      description: "Premier Legue",
      slug: "blog-1",
  },
  {
      title: "Blog 2",
      date: new Date("2023-10-23"),
      description: "NBA",
      slug: "blog-2"
  },
];

export default blogs;