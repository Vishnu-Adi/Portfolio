import type { ProjectSlug } from "@/lib/portfolio-data";

type ProjectVisualProps = {
  project: ProjectSlug;
  compact?: boolean;
};

const visualLabels: Record<ProjectSlug, string> = {
  webdrop: "Two devices finding a direct route",
  veriscope: "Language signals becoming reader context",
  "tutor-system": "A conversation with a memory layer",
};

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  return (
    <figure
      className={`project-visual project-visual--${project} ${compact ? "project-visual--compact" : ""}`}
      role="img"
      aria-label={visualLabels[project]}
    >
      {project === "webdrop" && <WebDropVisual />}
      {project === "veriscope" && <VeriScopeVisual />}
      {project === "tutor-system" && <TutorVisual />}
      <figcaption className="project-visual__caption">
        <span>{visualLabels[project]}</span>
        <span>FIG. / {project === "webdrop" ? "01" : project === "veriscope" ? "02" : "03"}</span>
      </figcaption>
    </figure>
  );
}

function WebDropVisual() {
  return (
    <svg viewBox="0 0 900 500" className="project-visual__svg" aria-hidden="true">
      <g className="visual-grid">
        <path d="M0 100H900M0 200H900M0 300H900M0 400H900" />
        <path d="M150 0V500M300 0V500M450 0V500M600 0V500M750 0V500" />
      </g>
      <path className="webdrop-connection" d="M218 255C315 255 330 255 450 255S585 255 682 255" />
      <path className="webdrop-connection webdrop-connection--secondary" d="M218 255C315 170 362 170 450 170S585 340 682 340" />
      <g className="webdrop-device webdrop-device--left">
        <rect x="96" y="164" width="122" height="182" />
        <path d="M120 194H194M120 212H180M120 300H194M120 318H168" />
        <circle cx="157" cy="326" r="5" />
      </g>
      <g className="webdrop-device webdrop-device--right">
        <rect x="682" y="164" width="122" height="182" />
        <path d="M706 194H780M706 212H766M706 300H780M706 318H754" />
        <circle cx="743" cy="326" r="5" />
      </g>
      <g className="webdrop-wave">
        <path d="M334 255c8-28 16 28 24 0s16 28 24 0 16 28 24 0 16 28 24 0" />
        <path d="M334 255c8-14 16 14 24 0s16 14 24 0 16 14 24 0 16 14 24 0" />
      </g>
      <g className="webdrop-nodes">
        <circle cx="218" cy="255" r="7" />
        <circle cx="450" cy="255" r="9" />
        <circle cx="682" cy="255" r="7" />
        <circle cx="450" cy="170" r="4" />
        <circle cx="450" cy="340" r="4" />
      </g>
      <text x="96" y="118" className="visual-label">MOTION / AUDIO</text>
      <text x="668" y="118" className="visual-label">DIRECT CHANNEL</text>
    </svg>
  );
}

function VeriScopeVisual() {
  return (
    <svg viewBox="0 0 900 500" className="project-visual__svg" aria-hidden="true">
      <g className="veriscope-paper">
        <rect x="70" y="58" width="322" height="384" />
        <path d="M102 106H352M102 132H326M102 158H362M102 184H294M102 210H344M102 262H330M102 288H358M102 314H304M102 366H348" />
        <path className="veriscope-highlight" d="M96 242H288V274H96Z" />
        <path d="M102 366H254" />
      </g>
      <g className="veriscope-labels">
        <text x="102" y="92" className="visual-label">REPORT / 04</text>
        <text x="470" y="104" className="visual-label">LANGUAGE SIGNAL</text>
        <text x="470" y="404" className="visual-label">READER CONTEXT</text>
      </g>
      <g className="veriscope-bars">
        <path d="M482 170H650" />
        <path d="M482 202H584" />
        <path d="M482 234H702" />
        <path d="M482 266H560" />
        <path d="M482 298H632" />
      </g>
      <g className="veriscope-score">
        <circle cx="704" cy="226" r="72" />
        <circle cx="704" cy="226" r="50" />
        <path d="M704 154V298M632 226H776" />
        <text x="670" y="236" className="visual-number">0.72</text>
      </g>
      <path className="veriscope-pointer" d="M392 214C430 214 438 226 472 226" />
    </svg>
  );
}

function TutorVisual() {
  return (
    <svg viewBox="0 0 900 500" className="project-visual__svg" aria-hidden="true">
      <g className="tutor-transcript">
        <path d="M72 92H300M72 120H252M72 148H280" />
        <path d="M72 214H326M72 242H230" />
        <path d="M72 308H274M72 336H310M72 364H190" />
        <text x="72" y="60" className="visual-label">TRANSCRIPT / SOURCE-AWARE</text>
      </g>
      <path className="tutor-wave" d="M390 242c12-50 24 50 36 0s24 50 36 0 24 50 36 0 24 50 36 0 24 50 36 0 24 50 36 0" />
      <g className="tutor-memory">
        <circle cx="652" cy="120" r="38" />
        <circle cx="770" cy="220" r="28" />
        <circle cx="646" cy="338" r="46" />
        <path d="M652 120L770 220 646 338M652 120L646 338" />
        <path d="M684 142L742 197M704 309L750 243" />
        <text x="628" y="126" className="visual-label">CTX</text>
        <text x="752" y="225" className="visual-label">SRC</text>
        <text x="624" y="344" className="visual-label">MASTERY</text>
      </g>
      <path className="tutor-pointer" d="M462 242C526 242 544 214 612 190" />
      <path className="tutor-pointer tutor-pointer--secondary" d="M462 242C540 242 562 318 610 326" />
    </svg>
  );
}
