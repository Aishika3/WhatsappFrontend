import React from "react";
import { useThemeContext } from "providers";

export const Documentation = () => {
  const { theme } = useThemeContext();
  const Steps = [
    {
      text: `Click on the "Add the first message" button.
      A prompt will appear, inviting you to enter a message. Type in your
      message. This will be the initial response your customers receive when
      they contact your company for the first time.`,
      images: [
        {
          src: "/assets/images/firstmessage.png",
          width: 1000, // Set the desired width of the image
          height: 600, // Set the desired height of the image
          alt: "Save Button",
        },
      ],
    },
    {
      text: `Once you've added the first message, you'll
      notice the option entries prompt has two distinct parts: The actual
      option, and the follow-up question.`,
      images: [
        {
          src: "/assets/images/add-option.png",
          width: 1000, // Set the desired width of the image
          height: 600, // Set the desired height of the image
          alt: "Save Button",
        },
      ],
    },
    {
      text: `Click on the "Add the first message" button.
      A prompt will appear, inviting you to enter a message. Type in your
      message. This will be the initial response your customers receive when
      they contact your company for the first time.`,
      images: [
        {
          src: "/assets/images/firstmessage.png",
          width: 800, // Set the desired width of the image
          height: 500, // Set the desired height of the image
          alt: "Save Button",
        },
        {
          src: "/assets/images/build-website.png",
          width: 400, // Set the desired width of the image
          height: 300, // Set the desired height of the image
          alt: "Save Button",
        },
      ],
    },
    {
      text: `Don't forget, after you've perfected your
      conversation flow, hit the "Save" button to ensure your work is stored
      in our database. If at any point you want to delete a form from the
      system, the "Delete" button is there for you to do so.`,
      //images: ["/assets/images/save.png"],
      images: [
        {
          src: "/assets/images/save.png",
          width: 300, // Set the desired width of the image
          height: 200, // Set the desired height of the image
          alt: "Save Button",
        },
      ],
    },
  ];
  return (
    <section
      className="md:w-[70%] sm:w-[80%] m-auto rounded-lg p-lg shadow-2xl px-20 py-10"
      style={{ backgroundColor: theme.backgroundColor.light }}
    >
      <h1 className="text-4xl font-bold" style={{ color: theme.color.light }}>
        Documentation
      </h1>

      <p className="text-left text-md" style={{ color: theme.color.light }}>
        Welcome! We promise, getting this set up is a cinch. In fact, it's
        quicker than whipping up a packet of Maggi - you'll be done and dusted
        in under <strong>5</strong> minutes, absolute max! <br /> For a quick
        visual guide, feel free to watch this tutorial video, or if you prefer a
        more personal touch, you can also book a{" "}
        <span className="text-PrimaryBlue underline underline-offset-2 font-extrabold capitalize">
          demo with us
        </span>
        .
      </p>

      <p
        className="text-left mt-6 text-md"
        style={{ color: theme.color.light }}
      >
        This guide is here to walk you through the process of using our product,{" "}
        <span className="text-PrimaryBlue underline underline-offset-2 font-extrabold">
          QuirkChat
        </span>
        .
      </p>

      <p
        className="text-left text-md my-6"
        style={{ color: theme.color.light }}
      >
        The first task at hand is to fill out the form located in the{" "}
        <span className="text-PrimaryBlue underline underline-offset-2 font-extrabold">
          My Form
        </span>{" "}
        section. Let's break it down into 4 steps:
      </p>

      <ul className="flex flex-col gap-6">
        {Steps.map(({ text, images }, index) => {
          return (
            <li
              key={index}
              className="flex flex-col bg-[#f8fafc] rounded-sm p-6 shadow-lg"
            >
              <p className="text-left">
                <strong
                  className="uppercase"
                  style={{ color: theme.backgroundColor.dark }}
                >
                  Step {index + 1}:
                </strong>{" "}
                {text}
              </p>
              <section className="flex flex-col gap-4">
                {images.map((image, imageIndex) => (
                  <article key={imageIndex}>
                    <img
                      className="mx-auto p-4"
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                    />
                  </article>
                ))}
              </section>
            </li>
          );
        })}
      </ul>

      <p
        className="text-left text-md mt-6"
        style={{ color: theme.color.light }}
      >
        By designing these options and questions, you can create a tailored
        conversation flow to guide your customers through their interaction with
        your service.
      </p>
    </section>
  );
};

export default Documentation;
