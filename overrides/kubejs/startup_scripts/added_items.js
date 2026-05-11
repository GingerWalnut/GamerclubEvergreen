StartupEvents.registry('item', event => {
    event.create("incomplete_steel_ingot", "create:sequenced_assembly").color(0, "#9e3813")
    event.create("sponge_fragment").maxStackSize(16)
    event.create("growing_sponge", "create:sequenced_assembly").texture("kubejs:item/sponge_fragment")
})
