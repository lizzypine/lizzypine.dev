export default function Card(props) {
  return (
    <div class="m-3 max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg" src={props.imgSrc} alt="" />
      <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.body}</p>
          <p class="mb-3 font-normal text-gray-400 dark:text-gray-200">Technologies: {props.technologies}</p>
          <div class="flex mt-4 space-x-3 md:mt-6">
              <a href={props.liveLink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Live Site
              </a>
              <a href={props.repoLink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Project Repo
              </a>
          </div>
      </div>
    </div>
  );
}

// export default Card