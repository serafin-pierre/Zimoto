import React from "react"
import { useEffect} from "react"

function AboutUs() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="w-full h-full min-h-screen text-center mt-40">
      <div className="w-2/3 mx-auto">
      <h1 className="text-6xl mb-5">About Team Zimoto</h1>
      <p className="py-3 text-xl">Recent Dev Academy Aotearoa Grads come together to bring you Zimoto!
      </p>
      <p className="py-3 text-xl">
        Our app has been designed with the busy traveler in mind. Travelers who are keen to get out and quickly explore their chosen travel destination with friendly guides who know the local area like the back of their hand.
      </p>
      <h2 className="py-3 text-4xl">Why <em>Zimoto</em> we hear you ask?</h2>
      <p className="py-3 text-xl"><em>Zimoto</em> means <em>Local</em> in Japanese.</p>
      </div>
    </div>

  )

}

export default AboutUs

