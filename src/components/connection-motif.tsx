export function ConnectionMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`connection-motif ${className}`} aria-hidden="true">
      <svg viewBox="0 0 760 420" role="presentation" className="connection-motif__svg">
        <g className="motif-grid">
          <path d="M40 80H720" />
          <path d="M40 170H720" />
          <path d="M40 260H720" />
          <path d="M40 350H720" />
          <path d="M120 40V380" />
          <path d="M300 40V380" />
          <path d="M480 40V380" />
          <path d="M660 40V380" />
        </g>
        <g className="motif-connections">
          <path d="M82 298C174 298 182 170 278 170S382 300 474 300 558 112 686 112" />
          <path d="M82 132C160 132 198 252 278 252S392 94 474 94 570 318 686 318" />
          <path d="M278 44V374M474 44V374" />
        </g>
        <g className="motif-nodes">
          <circle cx="82" cy="298" r="5" />
          <circle cx="82" cy="132" r="5" />
          <circle cx="278" cy="170" r="8" />
          <circle cx="278" cy="252" r="8" />
          <circle cx="474" cy="300" r="8" />
          <circle cx="474" cy="94" r="8" />
          <circle cx="686" cy="112" r="5" />
          <circle cx="686" cy="318" r="5" />
          <circle cx="278" cy="44" r="3" />
          <circle cx="278" cy="374" r="3" />
          <circle cx="474" cy="44" r="3" />
          <circle cx="474" cy="374" r="3" />
        </g>
        <g className="motif-pulses">
          <circle cx="194" cy="191" r="4" />
          <circle cx="390" cy="273" r="4" />
          <circle cx="574" cy="204" r="4" />
        </g>
      </svg>
      <div className="connection-motif__label">
        <span>CONNECTION / AS A SYSTEM</span>
        <span>FIG. 01</span>
      </div>
    </div>
  );
}
