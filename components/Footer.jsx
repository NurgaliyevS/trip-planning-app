import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";

function Footer() {
  const plausible = usePlausible();

  const projects = [
    { name: "Reddit Scheduler", url: "https://www.redditscheduler.com", alt: "Reddit Scheduler - Home Page" },
    { name: "MVP Agency", url: "https://mvpagency.org", alt: "MVP Agency - Home Page" },
    { name: "Reddit Agency", url: "https://redditagency.com", alt: "Reddit Agency - Home Page" },
    { name: "PregnantMeal", url: "https://pregnantmeal.com", alt: "PregnantMeal - Home Page" },
    { name: "Best Website Games", url: "https://bestwebsitegames.com", alt: "Best Website Games - Home Page" },
    { name: "SubPage", url: "https://subpage.io", alt: "SubPage - Home Page" },
    { name: "UptimeFriend", url: "https://uptimefriend.com", alt: "UptimeFriend - Home Page" },
    { name: "Weeealth", url: "http://weeealth.com/", alt: "Weeealth - Home Page" },
    { name: "TripPlanss", url: "https://tripplanss.com", alt: "TripPlanss - Home Page" },
    { name: "Environmental Job Boards", url: "https://environmentaljobboards.com", alt: "Environmental Job Boards - Home Page" },
  ];

  return (
    <footer className="container max-w-5xl flex flex-col lg:flex-row flex-wrap lg:justify-between px-8 py-24 mx-auto gap-10 lg:gap-0">
      {/* Logo and Copyright */}
      <aside className="flex gap-5 w-full lg:w-auto flex-col items-start">
        <Link href="/" className="flex items-center" title="Homepage">
          <Image
            src={"/logo.webp"}
            width={32}
            height={32}
            alt="TripPlanss - Plan a trip with multiple destinations"
            className="w-6 md:w-7 h-6"
          />
          <span className="font-extrabold text-lg ml-2">Trip Plans</span>
        </Link>
        <p className="flex text-sm items-center justify-center">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      {/* Projects Links */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            onClick={() => plausible(`Visit_${project.name.replace(/\s+/g, '')}`)}
            className="text-sm hover:text-primary transition-colors duration-200"
            alt={project.alt}
          >
            {project.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <nav className="flex gap-4">
        <Link
          href="https://x.com/tech_nurgaliyev"
          target="_blank"
          title="X tech_nurgaliyev"
          onClick={() => plausible("X")}
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 462.799"
            className="w-6 h-6"
          >
            <path
              fill-rule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
            />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sabyr-nurgaliyev-43b4a822a/"
          target="_blank"
          title="Linkedin sabyr-nurgaliyev"
          onClick={() => plausible("Linkedin")}
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="72"
            viewBox="0 0 72 72"
            width="72"
            className="w-6 h-6"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                fill="#007EBB"
              />
              <path
                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                fill="#FFF"
              />
            </g>
          </svg>
        </Link>
        <Link
          href="https://www.producthunt.com/@tech_nurgaliyev"
          target="_blank"
          title="ProductHunt tech_nurgaliyeev"
          onClick={() => plausible("ProductHunt")}
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 512"
            className="w-6 h-6"
          >
            <path
              fill="#FF6154"
              d="M512 256c0 141.39-114.61 256-256 256S0 397.39 0 256 114.61 0 256 0s256 114.61 256 256z"
            />
            <path
              fill="#fff"
              d="M290.14 256H217.6v-76.8h72.54c21.2 0 38.4 17.19 38.4 38.4 0 20.93-16.76 37.96-37.58 38.39-.27.01-.55.01-.82.01zm0-128H166.4v256h51.2v-76.8h72.54c49.47-.01 89.6-40.13 89.6-89.6 0-49.48-40.13-89.6-89.6-89.6z"
            />
          </svg>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;