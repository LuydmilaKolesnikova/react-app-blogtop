import { useState } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post";
import photo1 from "../../../images/postsPhotos/photo1.png";
import photo2 from "../../../images/postsPhotos/photo2.png";
import photo3 from "../../../images/postsPhotos/photo3.png";
import photo4 from "../../../images/postsPhotos/photo4.png";
import photo5 from "../../../images/postsPhotos/photo5.png";
import Paginator from "./Paginator";

const data = [
  {
    title: "Take a Virtual Tour of the Edo-Tokyo Museum",
    photo: photo1,
    theme: "Travel",
    beginningText:
      "The Edo-Tokyo Museum has launched Hyper Edohaku, an app for interacting with the museum's collection and learning about the Edo period's history and culture.",
    likesCount: 10,
    messagesCount: 2,
    viewsCount: 50,
  },
  {
    title:
      "The Hidden Underground Lake in the Center of the U.S. Threatening Farming",
    photo: photo2,
    theme: "Science",
    beginningText:
      "A huge, hidden underground lake spreads throughout the center of the U.S., supporting farming across the Great Plains and providing drinking water for millions, but the ongoing drought is threatening to dry it up.",
    likesCount: 9,
    messagesCount: 1,
    viewsCount: 64,
  },
  {
    title:
      "Texas Couple Miss Out on $100 Million to Make Home Into Nature Preserve",
    photo: photo3,
    theme: "Science",
    beginningText:
      "Texas couple missed out on over $100 million after they decided to make their home a nature preserve instead of expanding their property.",
    likesCount: 22,
    messagesCount: 3,
    viewsCount: 29,
  },
  {
    title: "Meet America's Best Plastic Surgeons For Rhinoplasty",
    photo: photo4,
    theme: "Beauty",
    beginningText:
      "With the growing popularity of plastic surgery over the decades, seeking out the best surgeon for the job—be it for reconstructive or cosmetic surgery—has become a decidedly daunting task, thanks to an increasingly crowded field.",
    likesCount: 54,
    messagesCount: 6,
    viewsCount: 282,
  },
  {
    title: "Your Morning Coffee May Be a Placebo, Neuropsychologists Find",
    photo: photo5,
    theme: "Science",
    beginningText:
      "While many people staunchly believe that they can't start the morning without a good old cup of joe, scientists have found that our brains might be lying to us about how much we need that coffee.",
    likesCount: 44,
    messagesCount: 5,
    viewsCount: 404,
  },
];

const MyPosts = () => {
  const [posts] = useState(data);
  return (
    <main className={styles.myposts}>
      {posts.map((post, index) => (
        <Post
          key={index}
          photo={post.photo}
          theme={post.theme}
          title={post.title}
          beginningText={post.beginningText}
          likesCount={post.likesCount}
          messagesCount={post.messagesCount}
          viewsCount={post.viewsCount}
        />
      ))}
      <Paginator />
    </main>
  );
};

export default MyPosts;
