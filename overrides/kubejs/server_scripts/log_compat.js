ServerEvents.tags("item", event => {
    let add_strip_log = (name) => {event.add("c:stripped_logs", name)}
    let add_strip_wood = (name) => {event.add("c:stripped_woods", name)}

    add_strip_wood("vanillabackport:stripped_pale_oak_wood")
    add_strip_log("aether:stripped_skyroot_log")
    add_strip_wood("aether:stripped_skyroot_wood")
    add_strip_log("hexalia:stripped_cottonwood_log")
    add_strip_wood("hexalia:stripped_cottonwood_wood")
    add_strip_log("hexalia:stripped_willow_log")
    add_strip_wood("hexalia:stripped_willow_wood")
    add_strip_log("abyssal_decor:stripped_ancient_birch_log")
    add_strip_log("abyssal_decor:white_wood_log")
    add_strip_wood("abyssal_decor:white_wood_wood")
    add_strip_log("abyssal_decor:stripped_blackwood_log")
    add_strip_log("abyssal_decor:stripped_cinnamon_log")
    add_strip_wood("abyssal_decor:stripped_cinnamon_wood")
    add_strip_wood("hexcasting:stripped_edified_wood")
})

ServerEvents.tags("block", event => {
    let add_barrel = (name) => {event.add("c:barrels", name)}

    add_barrel("spectrum:slate_noxwood_amphora")
    add_barrel("spectrum:ebony_noxwood_amphora")
    add_barrel("spectrum:ivory_noxwood_amphora")
    add_barrel("spectrum:chestnut_noxwood_amphora")
    add_barrel("spectrum:weeping_gala_amphora")
})

ServerEvents.recipes(event => {
    let add_be_log = (name) => {
        event.recipes.create.cutting("betterend:" + name + "_stripped_log", "betterend:" + name + "_log")
        event.recipes.create.cutting("betterend:" + name + "_stripped_bark", "betterend:" + name + "_bark")
    }
    add_be_log("mossy_glowshroom")
    add_be_log("pythadendron")
    add_be_log("end_lotus")
    add_be_log("lacugrove")
    add_be_log("dragon_tree")
    add_be_log("tenanea")
    add_be_log("helix_tree")
    add_be_log("umbrella_tree")
    add_be_log("jellyshroom")
    add_be_log("lucernia")
    
    let add_msh_log = (id, log, plank) => {
        event.recipes.create.cutting(Item.of(id + ":" + plank + "_planks", 6),id + ":stripped_" + log + "_stem")
        event.recipes.create.cutting(Item.of(id + ":" + plank + "_planks", 6),id + ":stripped_" + log + "_hyphae")
    }
    add_msh_log("spectrum", "slate_noxcap", "slate_noxwood")
    add_msh_log("spectrum", "ebony_noxcap", "ebony_noxwood")
    add_msh_log("spectrum", "ivory_noxcap", "ivory_noxwood")
    add_msh_log("spectrum", "chestnut_noxcap", "chestnut_noxwood")
})
