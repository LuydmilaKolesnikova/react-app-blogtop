import avatar from "../../src/images/avatars/avatar4.jpg";

export interface FooterPostInitialState {
  avatar: string;
  postName: string;
  time: string;
}

export interface FooterBlockInitialState {
  title: string;
  posts: Array<FooterPostInitialState>;
}

export interface FooterInitialState {
  postsData: Array<FooterBlockInitialState>;
}

export let initialState: FooterInitialState = {
  postsData: [
    {
      title: "POPULAR POSTS",
      posts: [
        {
          avatar: avatar,
          postName: "Why Are Millennials in So Much Debt?",
          time: "2 days ago",
        },
        {
          avatar: avatar,
          postName:
            "The Top 3 Foods That Cause Poor Gut Health, According to a Dietitian",
          time: "4 days ago",
        },
        {
          avatar: avatar,
          postName: "What to Feed Your Pet When You've Run Out of Cat Food",
          time: "5 days ago",
        },
      ],
    },
    {
      title: "POPULAR TRENDING",

      posts: [
        {
          avatar: avatar,
          postName: "Take a Virtual Tour of the Edo-Tokyo Museum",
          time: "8 days ago",
        },
        {
          avatar: avatar,
          postName:
            "Oldest Fossil of Sea Reptile Dating Back 94 Million Years Found in Utah",
          time: "10 day ago",
        },
        {
          avatar: avatar,
          postName:
            "Shock as Woman Who Feared She Had Pneumonia Is Told She's 39 Weeks Pregnant",
          time: "10 day ago",
        },
      ],
    },
  ],
};
