import { useEffect, useState } from "react";

const istFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function nowIst(): string {
  return `IST ${istFormatter.format(new Date())}`;
}

/**
 * Live IST clock. Client-side only, ticks every second.
 * Returns e.g. "IST 07:57".
 */
export function useIstClock(): string {
  const [time, setTime] = useState(nowIst);

  useEffect(() => {
    const id = window.setInterval(() => setTime(nowIst()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
