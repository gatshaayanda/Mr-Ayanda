import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section >
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/propic.png"
          alt="Profile photo"
          className="rounded-full block  p-1 hover:grayscale lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale"
                        // "     ^bg-gray-100                                                                   ^grayscale" 
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Independent Contractors' Portfolio: Mr. Ayanda .K Gatsha
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
    He was part of an organisation that helped keep its' community accurately and well informed on subject matters of relevance.
    {" "}
          <a
            target="_blank"
            className=" p-1 bg-blue-100 hover:grayscale rounded-lg"
            href="https://docs.google.com/document/d/1yv2RJuksHSdfY5YkSV-65bIF8Sbup1c400l7IgW-rVs/edit?tab=t.0#heading=h.xvrop77qnce7"
          >
            more
          </a>
        </p>
        <p>
       He helped produce other peoples' vision for their projects and worked with companies as a part of communications channels that catalyzed profitable business partnerships. started 
       a government endorsed business in the community he grew up in.
       {" "}
          <a
            target="_blank"
                className=" p-1 bg-blue-100 hover:grayscale rounded-lg"
            href="https://docs.google.com/document/d/1ZQztAZGPNY5MQLl9jIkkbz9MciU2irOVz9WSuPlrXmM/edit?usp=sharing"
          >
            more
          </a>
          .
        </p>
        <p>
          He started 
          a government endorsed business in the community he grew up in. {" "}
          <Link href="/blog"     className=" p-1 bg-blue-100 hover:grayscale rounded-lg"
           >
            more
          </Link>{" "}
        </p>
      
        <p>
          This web application has been built and maintained by{" "}
          {/* <a href="" target="_blank"> */}
            Ayanda
          {/* </a> */}
          .
        </p>
      </div>
    </section>
  );
}
