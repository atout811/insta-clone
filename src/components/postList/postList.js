import React, { useState } from "react";
import Post from "../post/post";

const data = [
  {
    name: "Hesham",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU",
    image:
      "https://images.unsplash.com/photo-1594704299981-d6390b6bdafb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    key: "1",
  },
  {
    name: "Mohamed",
    userImage: "https://i.mdel.net/i/db/2018/8/950736/950736-500w.jpg",
    image:
      "https://images.unsplash.com/photo-1594879572756-e254199fea05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    key: "2",
  },
  {
    name: "Akram",
    userImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image:
      "https://images.unsplash.com/photo-1594903057066-3c2abea0f9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
    key: "3",
  },
  {
    name: "Youssef",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmje64_1sPUuJv4F4uYWKM8ZjQFP7aTIe2GA&usqp=CAU",
    image:
      "https://images.unsplash.com/photo-1594903819709-069c1bdca6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    key: "4",
  },
];
export default function PostList(props) {
  console.log(props);
  if (props.image) {
    data.unshift({ name: props.name, image: props.image });
  }

  return (
    <div>
      {data.map(item => (
        <Post
          userImage={item.userImage}
          name={item.name}
          image={item.image}
          key={item.key}
        />
      ))}
    </div>
  );
}
