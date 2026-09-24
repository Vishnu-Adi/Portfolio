export function ResearchVisual() {
  return (
    <figure className="research-visual" role="img" aria-label="Cross-domain transfer learning diagram for wireless sensor network anomaly detection">
      <svg viewBox="0 0 720 520" className="research-visual__svg" aria-hidden="true">
        <g className="research-grid">
          <path d="M0 80H720M0 160H720M0 240H720M0 320H720M0 400H720M0 480H720" />
          <path d="M80 0V520M160 0V520M240 0V520M320 0V520M400 0V520M480 0V520M560 0V520M640 0V520" />
        </g>
        <g className="research-domains">
          <circle cx="124" cy="260" r="74" />
          <circle cx="350" cy="132" r="60" />
          <circle cx="350" cy="388" r="60" />
          <circle cx="596" cy="260" r="74" />
          <text x="94" y="264">SOURCE</text>
          <text x="320" y="136">DOMAIN A</text>
          <text x="320" y="392">DOMAIN B</text>
          <text x="564" y="264">TARGET</text>
        </g>
        <g className="research-paths">
          <path d="M194 260C244 260 254 190 290 170" />
          <path d="M194 260C244 260 254 330 290 350" />
          <path d="M410 132C476 132 488 224 522 248" />
          <path d="M410 388C476 388 488 296 522 272" />
          <path d="M350 192V328" />
        </g>
        <g className="research-nodes">
          <circle cx="244" cy="260" r="8" />
          <circle cx="290" cy="170" r="6" />
          <circle cx="290" cy="350" r="6" />
          <circle cx="410" cy="132" r="6" />
          <circle cx="410" cy="388" r="6" />
          <circle cx="522" cy="260" r="8" />
        </g>
        <g className="research-labels">
          <text x="40" y="42">CROSS-DOMAIN TRANSFER / WSN</text>
          <text x="248" y="250">LSTM</text>
          <text x="248" y="278">ISOLATION FOREST</text>
          <text x="514" y="248">ANOMALY</text>
          <text x="514" y="276">DETECTION</text>
        </g>
      </svg>
      <figcaption className="research-visual__caption">
        <span>Hybrid model / domain shift</span>
        <span>PLOS ONE / UNDER REVIEW</span>
      </figcaption>
    </figure>
  );
}
