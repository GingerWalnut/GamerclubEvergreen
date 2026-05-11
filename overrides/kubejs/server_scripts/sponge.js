RecipeViewerEvents.removeEntries('item', event => {
    event.remove("kubejs:growing_sponge")
})

ServerEvents.recipes(event => {
  event.recipes.create.mixing(Item.of("kubejs:sponge_fragment", 4), 
    ["minecraft:sponge", Item.of("supplementaries:fodder", 3),
     Fluid.of("sliceanddice:fertilizer", 250), Fluid.of("create:honey", 250)]
  )

  const incomplete = "kubejs:growing_sponge"
  event.recipes.create.sequenced_assembly(
    [CreateItem.of("minecraft:sponge", 1)],
    "kubejs:sponge_fragment",
    [
        event.recipes.create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 1000)]),
        event.recipes.create.pressing(incomplete, incomplete),
        event.recipes.create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 1000)]),
        event.recipes.create.pressing(incomplete, incomplete)
    ]
  ).transitionalItem(incomplete).loops(4)
})
