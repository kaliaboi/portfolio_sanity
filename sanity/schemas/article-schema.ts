const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Highlight", value: "highlight" },
            ],
          },
          // ...annotations, styles, lists and marks you already have
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
        // Add the code block here 👇
        // it'll show up as one of the blocks available in your
        // Portable Text Editor
        {
          type: "code",
          title: "Code block",
          options: {
            language: "javascript",
          },
        },
      ],
    },
  ],
};

export default article;
