ServerEvents.recipes(event => {
    event.shaped(
        Item.of('twilightforest:locked_vanishing_block', 8),
        ['AAA',
         'ABA',
         'AAA'],
        {A:'twilightforest:vanishing_block',
         B:'twilightforest:tower_key'}
    ).keepIngredient('twilightforest:tower_key')
    event.shapeless(
        Item.of('twilightforest:tower_key', 8),
        ['twilightforest:ur_ghast_trophy',
         'twilightforest:carminite',
         'supplementaries:key']
    ).keepIngredient('twilightforest:ur_ghast_trophy')
});
