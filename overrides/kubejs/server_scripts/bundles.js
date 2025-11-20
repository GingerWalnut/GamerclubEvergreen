RecipeViewerEvents.addEntries('item', event => {
	event.add('minecraft:bundle')
})

ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  event.shaped(
    Item.of('minecraft:bundle', 1), 
    [
      'A  ',
      'B  ', 
      '   '
    ],
    {
      A: 'minecraft:string',
      B: 'minecraft:leather'
    }
  )

  console.log('Hello! The recipe event has fired!')
})




