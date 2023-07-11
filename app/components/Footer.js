export default function Footer() {

  const currentYear = new Date().getFullYear();

  return(
    <footer className="text-center m-3">
      © {currentYear} Lizzy Pine
      </footer>
  );
}