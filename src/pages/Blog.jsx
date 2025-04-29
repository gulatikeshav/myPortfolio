import React from "react";
import PageHeader from "../components/pageHeader";
import Image from "../components/Image";

const Blog = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-gray-100 trs">
      <div className="text-center px-6">
        <PageHeader
          heading={" I build better than I blog — but that's about to change."}
          description={`"Stay tuned for dev notes, thoughts, and code journeys..."`}
        />
      </div>

      <Image
        src={"/blog.png"}
        className={"w-6/12 h-8/12 rounded-2xl shrink-0"}
      />
    </section>
  );
};

export default Blog;
