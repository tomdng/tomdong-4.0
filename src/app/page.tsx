import React from "react";

import A from "./components/A";
import H1 from "./components/H1";
import P from "./components/P";
import Project from "./components/Project";
import SmallText from "./components/SmallText";
import Leaf from "./leaf.svg";

export default function Home() {
  return (
    <div className="text-dark min-h-screen bg-white dark:bg-black dark:text-white">
      <main className="container mx-auto px-8 pt-16 lg:flex lg:max-w-5xl lg:flex-row-reverse lg:justify-around lg:pt-2">
        <Leaf
          id="leaf"
          className="stroke-current w-48 stroke-darkGreen stroke-8 lg:relative lg:top-16 lg:ml-16 lg:max-h-screen lg:w-64 dark:stroke-lightGreen"
        />

        <div className="container lg:max-w-2xl">
          <div className="mt-16">
            <H1>
              Tommy Dong <SmallText>(yes that&apos;s my last name)</SmallText>
            </H1>
            <P className="border-1 border-solid border-white">
              I&apos;m a software engineer that builds{" "}
              <SmallText>(and designs)</SmallText> great websites and meaningful
              applications for the web.
            </P>
            <ul className="mt-4 flex flex-row gap-x-4 font-sans text-base font-medium text-darkGreen underline lg:text-lg dark:text-lightGreen">
              <li>
                <A href="https://github.com/tomdng">GitHub</A>
              </li>
              <li>
                <A href="mailto:contact@tomdong.io">Email</A>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <P>Here are a few of my projects.</P>
            <div className="mt-4">
              <Project
                title="Propguard"
                desc={[
                  "Codecademy-style interactive learning tool built with React and Gatsby that teaches college students how to write autonomous flight code for quadcopters.",
                  "It also comes with a visual tool to create/modify custom tutorials so the user experience is good all around.",
                ]}
                link="https://github.com/MissouriMRR/propguard"
              />
              <Project
                title="Sushi Ai Website"
                desc={[
                  "There was a Japanese sushi place that didn’t have good websites (and therefore no internet traffic). So I went ahead and built a new website with React and Gatsby that not only looked better, but loaded much faster.",
                  "As an added bonus the improved SEO netted several thousand more page views.",
                ]}
                link="https://github.com/tomdng/sushi-ai"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-xs container mx-auto mt-16 px-8 pb-8 lg:max-w-5xl lg:pb-0">
        ~Tommy
      </footer>
    </div>
  );
}
