LootJS.lootTables(event => {
event
    .getLootTable("minecraft:entities/shulker")
    .createPool()    
    .addEntry(LootEntry.of("betterend:music_disc_strange_and_alien")
        .matchAttacker({entityType: "minecraft:skeleton"}).withWeight(1))
    .addEntry(LootEntry.of("betterend:music_disc_grasping_at_stars")
        .matchAttacker({entityType: "minecraft:skeleton"}).withWeight(1))
    .addEntry(LootEntry.of("betterend:music_disc_endseeker")
        .matchAttacker({entityType: "minecraft:skeleton"}).withWeight(1))
    .addEntry(LootEntry.of("betterend:music_disc_eo_dracona")
        .matchAttacker({entityType: "minecraft:skeleton"}).withWeight(1))
})
