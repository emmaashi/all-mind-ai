"use client";

import { CodeWindow } from "./code-window";
import {
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  ArrowRight,
  Zap,
  FileCode,
  TagsIcon as Annotation,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const educationCode = `function testFunc() {
  console.log('Monocraft!');
}`;

const socialCode = `const MyButton = () => (
  <button className="my-button">
    It's mine!
  </button>
);`;

const presentationCode = `>>> 1 + 2 + 7
10
>>> 1 * 2 * 4
24
>>> True & True & False & True
False`;

const embedCode = `<div style={{display: "flex", flexDirection: "column"}}>
  <ChakraUI.Tip>
    The whole card is clickable
  </ChakraUI.Tip>
  <CodeSnippet language="jsx">
    {/* JSX code here */}
  </CodeSnippet>
</div>`;

const jsCode = `function hello(name) {
  console.log('Hi ' + name);
}`;

const tsCode = `function hello(name: string) {
  console.log('Hi ' + name);
}`;

const annotationCode = `function hello(name: string) {
  console.log('Hi ' + name);
}`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ConnectedSections() {
  return (
    <div className="relative overflow-hidden">
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
        style={{ zIndex: -1 }}
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 200,100 C 400,100 400,400 200,400 C 0,400 0,700 200,700 C 400,700 400,1000 200,1000 C 0,1000 0,1300 200,1300 C 400,1300 400,1600 200,1600 C 0,1600 0,1900 200,1900"
          stroke="rgb(180, 180, 255)"
          strokeWidth="6"
          strokeDasharray="12,12"
          fill="none"
        />
      </svg>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 flex items-center"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 md:p-12 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[350px] md:h-[450px] flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                <div className="relative flex-grow flex flex-col justify-center">
                  <CodeWindow code={presentationCode} filename="smoosh.py" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-gray-800 ml-2"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                Create next-level presentations
              </h2>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Say goodbye to boring presentations created with PowerPoint or
                Keynote. 👋
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                snappify enables you to create stunning presentations, with
                first-class support for code snippets.
              </p>
              <Link
                href="#"
                className="group text-lg font-medium inline-flex items-center text-green-600 hover:text-green-700 transition-colors mb-10"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💡</span>
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold">Share interactive slides </span>
                    so your viewers can easily copy code snippets and interact
                    with links.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="relative w-full md:w-1/2 flex items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 -top-8 z-10"
              >
                <LinkedinIcon className="w-14 h-14 text-blue-600 drop-shadow-md" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-10 bottom-8 z-10"
              >
                <InstagramIcon className="w-20 h-20 text-pink-600 drop-shadow-md" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute right-1/2 -top-12 z-10"
              >
                <XIcon className="w-10 h-10 drop-shadow-md" />
              </motion.div>
              <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-3xl p-6 md:p-12 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[350px] md:h-[450px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mb-16 blur-xl"></div>
                <CodeWindow code={socialCode} filename="button.tsx" />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
                Elevate your Technical Content
              </h2>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                You're a developer, looking to create{" "}
                <span className="font-semibold">visually engaging</span>{" "}
                infographics for social media?
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Use snappify to create stunning visuals of your technical
                concepts, that will{" "}
                <span className="font-semibold">engage your followers</span> and
                take your social media presence to the next level.
              </p>
              <Link
                href="#"
                className="group text-lg font-medium inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
              >
                View Templates
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="relative w-full md:w-1/2 flex items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -left-10 -top-10 z-10"
              >
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <path
                    d="M0 25 L25 0 L50 25"
                    stroke="black"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
              </motion.div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-6 md:p-12 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[350px] md:h-[450px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
                <CodeWindow
                  code={educationCode}
                  filename="monocraft.js"
                  annotations={[
                    {
                      text: "Console.log is a built-in function that prints a given string or variable to the console.",
                      position: "bottom",
                    },
                  ]}
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Simplify your Education
              </h2>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Are you a teacher or course creator looking to help your
                students better understand{" "}
                <span className="font-semibold">technical concepts</span>?
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                snappify makes it easy to create educational content that lets
                your students retain information and grasp complex ideas.
              </p>
              <Link
                href="#"
                className="group inline-flex items-center text-lg font-medium text-purple-600 hover:text-purple-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
                Embed Interactive Infographics
              </h2>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                snappify enables you to{" "}
                <span className="font-semibold">embed your visuals</span> in a
                way that your viewers can easily copy code snippets or texts.
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                It's the perfect way to bring your blog to life or spice up your
                internal company documentation using rich infographics.
              </p>
              <Link
                href="#"
                className="group text-lg font-medium inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-10"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="p-8 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🌈</span>
                  <p className="text-lg leading-relaxed">
                    With{" "}
                    <span className="font-bold">
                      support for popular platforms
                    </span>{" "}
                    like Hashnode, Notion, and Medium, we ensure that your
                    infographics look great, no matter where they're posted!
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative w-full md:w-1/2 flex items-center"
            >
              <div className="bg-gradient-to-br from-amber-300 to-amber-500 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[500px] w-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md h-full overflow-hidden">
                  <h3 className="text-xl font-bold mb-4">
                    Spice up your articles
                  </h3>
                  <p className="text-gray-700 mb-4">
                    This is an example article using the embedding functionality
                    of snappify. You can hover over the infographic below and
                    copy the code snippet to give it a try in your own IDE.
                  </p>

                  <div className="bg-green-100 rounded-xl p-4 relative mt-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-400 rounded-full p-2 mr-3">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-bold text-lg">ChakraUI Tip 💡</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                        <pre className="text-xs text-gray-800 overflow-x-auto">
                          {`<flex direction="column" rounded="10px">
  <description>
    <text fontSize="column" color={...}>
      <heading as="h2" mb={4}>
        How we leverage supabase
      </heading>
    </text>
  </description>
</flex>`}
                        </pre>
                      </div>
                      <div className="bg-purple-600 rounded-lg p-3 text-white">
                        <h4 className="font-bold mb-2">
                          How we leverage supabase to build snappify
                        </h4>
                        <p className="text-xs">
                          Supabase enables us to validate our product ideas, get
                          things done quickly, save valuable time
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                          <span className="text-xs">Dominik Sumer</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4 text-xs text-gray-600">
                      <div>
                        <span className="bg-yellow-200 px-1 rounded">+/+</span>{" "}
                        tag is located here
                      </div>
                      <div className="text-red-500">
                        The whole card is clickable
                        <span className="inline-block ml-1">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <div className="flex items-center mb-4">
                <FileCode className="h-8 w-8 mr-3" />
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Add multiple code windows
                </h2>
              </div>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Sometimes you want to describe differences in code snippets and
                point out best practices by comparing them.
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                snappify comes to the rescue! Add{" "}
                <span className="font-semibold">
                  as many code snippets as you want
                </span>{" "}
                and arrange them per drag and drop.
              </p>
              <Link
                href="#"
                className="group text-lg font-medium inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative w-full md:w-1/2 flex items-center"
            >
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl p-6 md:p-12 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[350px] md:h-[500px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mb-16 blur-xl"></div>

                <div className="mb-8">
                  <CodeWindow code={jsCode} filename="hello.js" />
                </div>

                <div>
                  <CodeWindow code={tsCode} filename="hello.ts" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-32"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-[450px] flex flex-col justify-center"
            >
              <div className="flex items-center mb-4">
                <Annotation className="h-8 w-8 mr-3" />
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                  Annotate with Text and Arrows
                </h2>
              </div>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Ever heard the myth of self explaining code? Pah! 😄
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Place explanations (or just funny jokes) beside your snippets
                and style them to your needs with our{" "}
                <span className="font-semibold">powerful rich-text editor</span>
                .
              </p>
              <p className="text-base md:text-xl mb-4 md:mb-5 leading-relaxed">
                Additionally, you're able to add{" "}
                <span className="font-semibold">arrow elements</span> to point
                at specific parts of your code.
              </p>
              <Link
                href="#"
                className="group text-lg font-medium inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative w-full md:w-1/2 flex items-center"
            >
              <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-6 md:p-12 shadow-xl transform transition-transform hover:scale-[1.02] relative overflow-hidden h-[350px] md:h-[450px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>

                <div className="relative">
                  <CodeWindow code={annotationCode} filename="hello.ts" />

                  <div className="absolute right-0 top-1/2 transform translate-x-[120%] -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg w-64">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">💡</span>
                      <span className="font-bold text-purple-600">
                        In TypeScript
                      </span>
                    </div>
                    <p className="text-gray-700">
                      you're able to assign a type to your{" "}
                      <span className="font-bold text-purple-600">
                        variables
                      </span>
                    </p>

                    <svg
                      className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2"
                      width="100"
                      height="30"
                      viewBox="0 0 100 30"
                    >
                      <path
                        d="M 0,15 C 30,15 70,15 100,15"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M 0,15 L 10,10 L 10,20 Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 blur-xl animate-float"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-pink-100 rounded-full opacity-30 blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-xl animate-float-slow"></div>
    </div>
  );
}
