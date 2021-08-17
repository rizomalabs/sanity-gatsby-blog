export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611c19a51d1e8200aa30e864",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-64bcty29",
                  apiId: "114a3330-fd12-4887-bfab-eef5660b3921",
                },
                {
                  buildHookId: "611c19a54658d1009d2156c0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4z68ogqp",
                  apiId: "36602013-bdf8-4a4a-8bb5-aac6b51c41ff",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rizomalabs/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4z68ogqp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
