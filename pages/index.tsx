import React from "react"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tommy Dong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>
            Tommy Dong <span>(yes that's my last name)</span>
          </h1>
          <p>
            I'm a software engineer that builds <span>and designs</span> great
            websites and meaningful applications for the web.
          </p>
          <ul>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Here are a few of my projects.</p>
          <div>
            <p>
              <a href="#">Propguard</a>
            </p>
            <p>
              Codecademy-style interactive learning tool built with React and
              Gatsby that teaches college students how to write autonomous
              flight code for quadcopters.
            </p>
            <p>
              It also comes with a visual tool to create/modify custom tutorials
              so the user experience is good all around.
            </p>
          </div>

          <div>
            <p>
              <a href="#">China King</a> and <a href="#">Sushi Ai</a>
            </p>
            <p>
              There was a Chinese restaurant and a Japanese sushi place that
              didn’t have good websites (and therefore no internet traffic). So
              I went ahead and built two new websites with React and Gatsby that
              not only looked better, but loaded much faster.
            </p>
            <p>
              As an added bonus the improved SEO netted several thousand more
              page views.
            </p>
          </div>
        </div>

        <div>
          <p>
            I love using JavaScript <span>(TypeScript)</span> and Python, but
            I'm also venturing out and learning Go for a fresh perspective.
          </p>

          <p>
            When I’m not working I like reading, taking photos/videos, and
            leading a <a href="#">onderful drone engineering team.</a>
          </p>
        </div>
      </main>

      <footer>
        All credits go to <a href="#">Next.js</a> and{" "}
        <a href="#">TailwindCSS</a> even if it's little overkill for the site
        right now.
      </footer>
    </div>
  )
}
