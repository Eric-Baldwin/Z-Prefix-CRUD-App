exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {id: 1, first_name: 'Harvey', last_name: 'Milk', username: 'harvey_milk', password: 'password1'},
        {id: 2, first_name: 'Marsha', last_name: 'Johnson', username: 'marsha_johnson', password: 'password2'},
        {id: 3, first_name: 'Sylvia', last_name: 'Rivera', username: 'sylvia_rivera', password: 'password3'},
        {id: 4, first_name: 'Audre', last_name: 'Lorde', username: 'audre_lorde', password: 'password4'},
        {id: 5, first_name: 'Bayard', last_name: 'Rustin', username: 'bayard_rustin', password: 'password5'},
        {id: 6, first_name: 'Alan', last_name: 'Turing', username: 'alan_turing', password: 'password6'},
        {id: 7, first_name: 'James', last_name: 'Baldwin', username: 'james_baldwin', password: 'password7'},
        {id: 8, first_name: 'Barbara', last_name: 'Gittings', username: 'barbara_gittings', password: 'password8'},
        {id: 9, first_name: 'Larry', last_name: 'Kramer', username: 'larry_kramer', password: 'password9'},
        {id: 10, first_name: 'Christine', last_name: 'Jorgensen', username: 'christine_jorgensen', password: 'password10'}
      ]);
    });
};
