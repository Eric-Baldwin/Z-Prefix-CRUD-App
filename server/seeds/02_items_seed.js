exports.seed = function(knex) {

  return knex('items').del()
    .then(function () {

      return knex('items').insert([
        {id: 1, user_id: 1, item_name: 'Arkham Horror', description: 'A cooperative game of cosmic horror.', quantity: 10},
        {id: 2, user_id: 2, item_name: 'Eldritch Horror', description: 'A board game of global mystery.', quantity: 9},
        {id: 3, user_id: 3, item_name: 'Twilight Imperium', description: 'An epic board game of galactic conquest.', quantity: 8},
        {id: 4, user_id: 4, item_name: 'Star Wars: Rebellion', description: 'A board game of epic conflict.', quantity: 7},
        {id: 5, user_id: 5, item_name: 'Mansions of Madness', description: 'A fully cooperative horror game.', quantity: 6},
        {id: 6, user_id: 6, item_name: 'Descent: Journeys in the Dark', description: 'A board game of dungeon-delving adventure.', quantity: 5},
        {id: 7, user_id: 7, item_name: 'Runewars', description: 'A strategy board game of fantasy empires.', quantity: 4},
        {id: 8, user_id: 8, item_name: 'Battlestar Galactica', description: 'A board game of strategy and betrayal.', quantity: 3},
        {id: 9, user_id: 9, item_name: 'KeyForge', description: 'The world’s first Unique Deck Game.', quantity: 2},
        {id: 10, user_id: 10, item_name: 'Lord of the Rings: Journeys in Middle-Earth', description: 'Embark on your own adventures.', quantity: 1}
      ]);
    });
};
