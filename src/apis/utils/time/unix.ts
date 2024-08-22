/* Unix 시간 가져오기 */
export const getUnixTime = () => {
  const currentTime = new Date();
  return Math.floor(currentTime.getTime() / 1000);
}