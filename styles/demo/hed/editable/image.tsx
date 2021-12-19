/**
 * Image actions
 */
export const image_load = async (item) => {
  console.log("image_load.item", item)
  await setTimeout(null, 2000)
  return true
}