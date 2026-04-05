 RecipeViewerEvents.removeEntries('item', event => {
	event.remove('sophisticatedbackpacks:stack_upgrade_starter_tier')
	event.remove('sophisticatedbackpacks:stack_upgrade_tier_1')
	event.remove('sophisticatedbackpacks:stack_upgrade_tier_2')
	event.remove('sophisticatedbackpacks:stack_upgrade_tier_3')
	event.remove('sophisticatedbackpacks:stack_upgrade_tier_4')
	event.remove('sophisticatedbackpacks:stack_upgrade_omega_tier')
	event.remove('sophisticatedbackpacks:stack_downgrade_tier_1')
	event.remove('sophisticatedbackpacks:stack_downgrade_tier_2')
	event.remove('sophisticatedbackpacks:stack_downgrade_tier_3')
	event.remove('sophisticatedbackpacks:inception_upgrade')
	event.remove('sophisticatedbackpacks:infinity_upgrade')
	event.remove('sophisticatedbackpacks:survival_infinity_upgrade')
 })


ServerEvents.recipes(event => {
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_starter_tier'})
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_1'})
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_2'})
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_3'})
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_4'})
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_omega_tier'})
    event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_1'})
    event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_2'})
    event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_3'})
    event.remove({output:'sophisticatedbackpacks:inception_upgrade'})

    event.remove({output:'sophisticatedbackpacks:backpack'})
    event.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1),
        ['ABA',
         'ACA',
         'BBB'],
        {A:'minecraft:string',
         B:'minecraft:leather',
         C:'minecraft:shulker_shell'}
    )
   event.remove({id:'sophisticatedbackpacks:iron_backpack_from_copper'});

});
