//Parents: ProjectContainer

const Project = (props) => {
  return (
    <>
      <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12">
            About the Artist
          </h1>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-xl w-full max-w-md object-cover"
                src="./images/KatyBioPhoto.png"
                alt="Katy Wang"
              />
            </div>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Katy Wang first became drawn to plants when exploring the cloud
                forests of South America with her husband.
              </p>
              <p>
                Back at home in New York City, she went on to study botanical
                art at the New York Botanical Garden and exhibit her work in
                American Society of Botanical Artists' Annual International
                shows.
              </p>
              <p>
                In 2019, she became involved with the New York Mycological
                Society, which launched her interest into the diverse and
                enigmatic world of Fungi.
              </p>
              <p>
                She currently resides in the San Francisco Bay Area, where she
                continues to work on botanical artwork with a focus on the
                fascinating kingdom of Fungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
