/**
 * Image actions
 */
export const image_load = async (image_id) => {
  console.log("image_load", image_id)
  await setTimeout(null, 2000)
  return true
}