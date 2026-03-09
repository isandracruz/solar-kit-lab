import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-1.5 py-6 text-xs text-muted-foreground/60">
      <p className="text-center">&copy; 2026 Solar Kit Lab. Todos los derechos reservados.</p>

      <p className="text-xs text-muted-foreground/60">
        Proyecto con fines educativos. Las estimaciones pueden variar segun condiciones reales.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">
          Hecho por <span className="font-medium text-foreground/80">Isandra Cruz</span>
        </span>
        <span className="text-muted-foreground/40">|</span>
        <div className="flex items-center gap-1.5">
          <a
            href="https://www.linkedin.com/in/isandracruzdiaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="https://github.com/isandracruz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;