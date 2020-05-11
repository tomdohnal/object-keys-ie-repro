import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    Object.keys("HEY HOW ARE YOU DOING? :) ").forEach((i) => console.log(i));
  }, []);

  return <div>Hi :)</div>;
}
