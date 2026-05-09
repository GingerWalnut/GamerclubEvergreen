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
})
