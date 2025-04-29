import React, { useState } from "react";
import Image from "../components/Image";
import Input from "../components/Input";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CodeSnippetSection from "../components/CodeSnippetSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full max-w-4xl p-8 m-auto bg-gray-100  text-gray-900  rounded-xl shadow-lg space-y-8">
      {/* Contact Header */}

      <div className="flex flex-col-reverse md:flex-row md:justify-start gap-8 items-center ">

        <PageHeader
          heading={"Contact Me"}
          description={
            "Have an idea in mind? Reach out, and let's make it happen.!!"
          }
        />

        <Image
          src="/oppurtunity.png"
          alt="oppurtunity-image"
          className={"w-full  md:w-40 md:h-32 rounded-2xl shrink-0 "}
        />

      </div>

      <div className="flex flex-col-reverse md:flex-row justify-start gap-14 items-start  w-full ">

        <form className=" md:space-y-6 md:w-7/12  space-y-4 w-full" onSubmit={handleSubmit}>

          <Input
            label={"Name"}
            tag="input"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-200  text-gray-900  outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />

          <Input
            label={"Email"}
            tag="input"
            type="email"
            placeholder="you@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-200  text-gray-900  outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />

          <Input
            label={"Message"}
            tag="input"
            type="textarea"
            placeholder="Write your message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-200  text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 resize-none transition duration-200 h-24"
          />

          <div className="flex space-x-4">
            <Button
              type={"submit"}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200"
              value={"Send Message"}
            />

            <Button
              type="button"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 transition duration-200"
              onClick={handleReset}
              value={"Reset"}
            />
          </div>

        </form>

        <Image
          src="/contact-img.jpg"
          alt="contact-image"
          // className={"size-52 rounded-2xl shrink-0"}
          className="hidden md:block md:w-4/12 md:h-5/12 mt-9 rounded-2xl   shrink-0 "
        />
      </div>

      <CodeSnippetSection
        subHeading={`Contact.jsx`}
        src={"/contact-code.png"}
        className={"w-full max-w-3xl rounded-xl shadow-md"}
      />
    </section>
  );
};

export default Contact;
