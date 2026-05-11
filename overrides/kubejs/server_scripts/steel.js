RecipeViewerEvents.removeEntries('item', event => {
    event.remove("kubejs:incomplete_steel_ingot")
})

ServerEvents.recipes(event => {
  event.remove({id:"createbigcannons:mixing/alloy_nethersteel_cast_iron"})
  event.remove({id:"createbigcannons:mixing/alloy_steel"})
  const incomplete = "kubejs:incomplete_steel_ingot"
  event.recipes.create.sequenced_assembly(
    [CreateItem.of("createbigcannons:steel_ingot", 1)],
    "minecraft:iron_ingot",
    [
        event.recipes.create.deploying(incomplete, [incomplete, ["malum:coal_fragment", "malum:charcoal_fragment"]]),
        event.recipes.create.pressing(incomplete, incomplete),
        event.recipes.create.cutting(incomplete, incomplete),
        event.recipes.create.pressing(incomplete, incomplete)
    ]
  ).transitionalItem(incomplete).loops(4)
})
