export default function Footer() {

  const currentYear = new Date().getFullYear();

  return(
    <footer className="font-light text-center m-5">
      <hr class="border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="grid grid-cols-2 gap-6">
        <div className="">
        © {currentYear} Lizzy Pine
        </div>
        <div className="">
          Illustrations made by Krit Kongjundee from <a href="https://vecteezy.com" target="_blank" rel="noopener noreferrer" className="underline">vecteezy.com</a> 
        </div>
      </div>
      
      </footer>
  );
}