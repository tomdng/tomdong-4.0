import React from "react"
import Head from "next/head"

import A from "../components/A"
import H1 from "../components/H1"
import P from "../components/P"
import Project from "../components/Project"
import SmallText from "../components/SmallText"

import Leaf from "../public/leaf.svg"

// TODO: Still need to add proper light vs dark theming
// TODO: And of course make the design responsive
// FIXME: Fonts don't get bolded on IOS
export default function Home() {
  return (
    <div className="bg-white text-dark dark:bg-black dark:text-white">
      <Head>
        <title>Tommy Dong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-8 pt-16">
        <Leaf className="w-48 border-white stroke-current stroke-8 text-darkGreen dark:text-lightGreen" />

        <div className="container">
          <div className="mt-16">
            <H1>
              Tommy Dong <SmallText>(yes that's my last name)</SmallText>
            </H1>
            <P className="border-solid border-1 border-white">
              I'm a software engineer that builds{" "}
              <SmallText>(and designs)</SmallText> great websites and meaningful
              applications for the web.
            </P>
            <ul className="mt-4 flex flex-row justify-between font-sans font-semibold text-base text-darkGreen dark:text-lightGreen underline">
              <li>
                <A href="#">GitHub</A>
              </li>
              <li>
                <A href="#">Email</A>
              </li>
              <li>
                <A href="#">Resume</A>
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

          <div className="mt-16">
            <P>
              I love using JavaScript <SmallText>(TypeScript)</SmallText> and
              Python, but I'm also venturing out and learning Go for a fresh
              perspective.
            </P>

            <P className="mt-8">
              When I’m not working I like reading, taking photos/videos, and
              leading a{" "}
              <A href="https://multirotor.mst.edu/">
                wonderful drone engineering team.
              </A>
            </P>
          </div>
        </div>
      </main>

      <footer className="mt-16 container px-8 pb-8">
        All credits go to{" "}
        <A className="font-semibold" href="https://nextjs.org/">
          Next.js
        </A>{" "}
        and{" "}
        <A className="font-semibold" href="https://tailwindcss.com/">
          TailwindCSS
        </A>{" "}
        even if it's little overkill for the site right now.
      </footer>
    </div>
  )
}
