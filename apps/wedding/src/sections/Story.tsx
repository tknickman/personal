import Heading from '@components/Heading'
import Section from '@components/Section'
import { CameraIcon } from '@heroicons/react/solid'

import Engage from '../images/engage2.jpg'

const Story = () => {
  return (
    <Section id="story" className="overflow-hidden bg-maroon">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Heading>About Us</Heading>
        </div>
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8"></div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative col-span-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={Engage.src}
                    alt="Beech Mountain"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Beech Mountain, Maine</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-span-2 mt-8 lg:mt-0 ">
            <div className="mx-auto mb-16 max-w-prose text-base lg:max-w-none">
              <p className="text-xl text-egg">
                You’re probably wondering how a software engineer and an
                anthropologist wound up together. Tom quite literally builds the
                world in 1s and 0s; Steph almost exclusively inhabits its gray.
                Tom is fastidious about his coffee; Steph can’t be bothered to
                weigh the grounds. Tom likes sharp lines, clean corners, and
                minimal clutter; Steph turns generously towards eclecticism and
                struggles to put things away. So how, dear reader, did you end
                up here?
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-egg lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                It all started with the desk. Well, actually the 4Runner, then
                the desk. (But we promise, the desk is also important.) Somehow,
                Tom and Steph found themselves as newly minted college graduates
                driving Tom’s beloved 4Runner across the country. They spent
                four weeks together traveling across the country—from the
                mountains of Virginia to the bullfrogs of Indiana to the
                Chipotles of Kansas to the Maroon Bells of Colorado to the
                arches of Utah, all the way up through Montana glaciers, across
                Canadian lakes to Seattle cappuccinos until finally reaching the
                hardwired heart of the Silicon Valley. (I guess you could say it
                was a *hard drive*.)
              </p>
              <p>
                Once they arrived, they took a trip to Ikea, where Tom hoped to
                recreate 500 Days of Summer, which Steph had not seen, and Steph
                got immediately overwhelmed by the sheer number of sofa options.
                So they left, empty-handed… but wait, do you, dear reader, also
                detect full-hearts?
              </p>
              <p>
                Indeed, Tom dropped Steph off at the airport, homesick and a
                little smitten, and Steph was about to board her plane back to
                Pennsylvania when suddenly she wheeled around at the gate, ran
                through the airport, flew down the escalators, jumped the
                security ropes, skidded on the shined linoleum before colliding
                with none other than Tom, teary-eyed and open-armed. They
                professed their mutual love for one another and the rest is
                history.
              </p>
              <p>
                Except here’s where the desk comes in because Steph did not
                actually run back to Tom’s ready embrace. She did in fact board
                the plane, and Tom did in fact stay out in California for four
                years. They kept in touch as travel buddies mostly, meeting up
                in Seattle, Tahoe, and Asheville to hike. When Steph moved to
                Chicago for grad school, Tom flew out each year to visit and go
                to dinner (subtle, Tom, subtle).
              </p>

              <p className="mt-12">
                In 2020, they found themselves back on the same coast, and Steph
                asked Tom to build her a standing desk if he had the time. Tom
                did not in fact have the time, working remotely and juggling his
                numerous hobbies, but he readily agreed. They started texting
                about the desk—its design, dimensions, materials, etc.—and
                gradually the topic of dinner came up. By the fourth dinner,
                they were unequivocally in love. By their fourth month, they
                knew they would marry the other. And by their twenty-fourth
                month, here they are, about to walk down the aisle.
              </p>
              <p>
                Steph still gets overwhelmed by the world’s sheer number of
                furniture choices, and Tom still hopes to recreate romantic
                moments at every opportunity (he also convinced Steph to finally
                watch 500 Days of Summer). It’s true, they don’t agree on
                everything. But they absolutely agree on two things: Alli is the
                best pup, and their love was always already here.
              </p>
              <p>We are so excited to celebrate it with you all!</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Story
