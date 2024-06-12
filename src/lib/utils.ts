export const MIN_ANIM_SPEED = 100;
export const MAX_ANIM_SPEED = 500;

export function generateRandomNumFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
