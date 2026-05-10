ServerEvents.recipes(event => {
  const incomplete = "kubejs:sponge_fragment"
  event.recipes.create.sequenced_assembly(
    [CreateItem.of("minecraft:sponge", 1)],
    "kubejs:sponge_fragment",
    [
        event.recipes.create.filling(incomplete, [incomplete, Fluid.of("sliceanddice:fertilizer", 50)]),
        event.recipes.create.pressing(incomplete, incomplete),
        event.recipes.create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 1000)]),
        event.recipes.create.deploying(incomplete, [incomplete, "minecraft:bone_meal"]),
        event.recipes.create.pressing(incomplete, incomplete)
    ]
  ).transitionalItem(incomplete).loops(5)
})
