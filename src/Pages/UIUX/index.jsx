import React from "react";

import { Images } from "../../Icons&Images";
import Courses from "../../components/Courses";

const UIUX = () => {
  const courseIcons = [
    Images.adobe,
    Images.smileyface,
    Images.rocket,
    Images.figma,
    Images.diamond,
    Images.inc,
  ];

  const courseDescription = (
    <p>
      Learn to design and deliver digital products that serve clients’ needs and
      solve users’ problems. Understand the fundamental techniques and tools of
      design like problem definition, user research, prototyping, testing, and
      more.
    </p>
  );

  const courseCurriculum = [
    {
      title: "Fundamentals",
      desc: "You’ll participate in a wide-range of design projects where you’ll gain hands-on experience with the fundamentals of design methodology. You’ll identify the problems, develop solutions, and create prototypes and wireframes using standard design tools including Figma and Balsamiq.",
    },
    {
      title: "Research And Strategy",
      desc: "You’ll learn to plan research to understand users’ needs, behaviour, and motivation. You’ll learn to communicate complicated interactions visually maps, featuring ideal personas that represent real users, after which you’ll be able to translate your findings into product design using wireframing and prototyping.",
    },
    {
      title: "Responsive Design Basics",
      desc: "You’ll be able to apply standard design principles to develop both low and high fidelity websites and applications. In the design process, you’ll learn to make use of grids and breakpoints to make sure your projects are responsive across different screen sizes, ensuring a perfect user experience.",
    },
    {
      title: "User Interface Design",
      desc: "With your knowledge of usability design learnt earlier, you’ll be taught how to master the intricacies of colour, typography, and images. You’ll learn to use Figma and Adobe Illustrator to craft out professional interfaces. You’ll also be taught different methods for designing and maintaining UI pattern libraries.",
    },
    {
      title: "Product Design",
      desc: "You’ll learn to create realistic visualizations of your project using high fidelity design mockups, and push them into a visually appealing and functional portfolio. Finally, you’ll be taught the latest industry trends and tools to help you push your skills in the UX Design job market.",
    },
    {
      title: "Final Project",
      desc: "In order to complete your Product Design certificate, you’ll design and develop a web and mobile application, from concept to a clickable prototype. This gives you a hands-on experience, you apply essential tactics - like wireframing and user research - you’ve learnt to produce a working prototype.",
    },
  ];
  return (
    <main>
      <Courses
        courseTitle="User Interface & user experience Design"
        courseDescription={courseDescription}
        courseIcons={courseIcons}
        courseCurriculum={courseCurriculum}
        courseThread={Images.thread}
      />
    </main>
  );
};

export default UIUX;
