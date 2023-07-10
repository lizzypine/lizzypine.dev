import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

export default function Header() {
  return(
    <header className="banner h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Lizzy Pine
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Software Developer
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <div>
              <a href="https://github.com/lizzypine" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="2.5em" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/lizzypine/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size="2.5em" />
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}