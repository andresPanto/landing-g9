import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Subscribe from "~/components/Subscribe";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTQ4MTAyNQ&ixlib=rb-4.0.3&q=80&w=1080"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        {subscribed ? (
          <>
            <h1 className="font-sans font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
              You have subscribed!
            </h1>
            {/* <p className="font-secondary text-[#C5CAE9] text-base md:text-lg lg:text-xl">
              Capture your customer emails on a beautiful landing page that syncs with your Notion workspace.
            </p> */}
          </>
        ) : (
          <div className="space-y-8">
            <h1 className="font-sans font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Welcome to  {' '}
              <span className="text-[#3F51B5]">
                Founderfit.
              </span>
            </h1>
            <p className="font-secondary text-[#C5CAE9] text-base md:text-lg lg:text-xl">
            Get the first thing right: build a team of passionate, synergic and complementary startup founders.
            </p>
            <p className="font-secondary text-[#C5CAE9] text-base md:text-lg lg:text-xl">
            Find them right here at Foundefit.
            </p>
            <p className="font-secondary text-[#C5CAE9] text-base md:text-lg lg:text-xl">
            Join the waiting list:
            </p>
            <Subscribe setSubscribed={setSubscribed} />
          </div>
        )}
      </div>
    </div>
  )
}