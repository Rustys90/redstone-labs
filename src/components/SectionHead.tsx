import { OreBlock } from "./Pixel";
import "./section-head.css";

interface SectionHeadProps {
  index: string;
  title: string;
  flavor: string;
  titleId: string;
}

/* Shared section header: ore-block marker + section number left of the
   Silkscreen H2 (§6), with a VT323 flavor line as the whisper track. */

export default function SectionHead({ index, title, flavor, titleId }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <span className="sec-head__ore" aria-hidden="true">
        <OreBlock />
      </span>
      <span className="sec-head__index" aria-hidden="true">
        {index}
      </span>
      <h2 className="sec-head__title" id={titleId}>
        {title}
      </h2>
      <p className="sec-head__flavor">{flavor}</p>
    </div>
  );
}
