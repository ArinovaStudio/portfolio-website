interface AbsolutePosition {
  left: string;
  top: string;
}

export function getAbsolutePosition({
  index,
  isMobile,
}: {
  index: number;
  isMobile: boolean;
}): AbsolutePosition {
  const IMAGE_WIDTH = isMobile ? 300 : 600;
  const IMAGE_HEIGHT = isMobile ? 175 : 350;

  // safe viewport padding
  const PADDING_X = isMobile ? 16 : 80;
  const PADDING_Y = isMobile ? 100 : 120;

  // number of visual slots INSIDE viewport
  const SLOTS = isMobile ? 2 : 3;

  // slot index (this is the key fix)
  const slot = index % SLOTS;

  // horizontal positioning
  const leftPx = isMobile
    ? `calc(50% - ${IMAGE_WIDTH / 2}px)`
    : slot === 0
    ? PADDING_X
    : slot === 1
    ? `calc(50% - ${IMAGE_WIDTH / 2}px)`
    : `calc(100% - ${IMAGE_WIDTH + PADDING_X}px)`;

const slotSpacing = isMobile ? 160 : 200;
  const topPx = PADDING_Y + slot * slotSpacing;

  return {
    left: typeof leftPx === "string" ? leftPx : `${leftPx}px`,
    top: `${topPx}px`,
  };
}
