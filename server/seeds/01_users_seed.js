exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {first_name: 'Harvey', last_name: 'Milk', username: 'harvey_milk', password: 'password1'},
        {first_name: 'Marsha', last_name: 'Johnson', username: 'marsha_johnson', password: 'password2'},
        {first_name: 'Sylvia', last_name: 'Rivera', username: 'sylvia_rivera', password: 'password3'},
        {first_name: 'Audre', last_name: 'Lorde', username: 'audre_lorde', password: 'password4'},
        {first_name: 'Bayard', last_name: 'Rustin', username: 'bayard_rustin', password: 'password5'},
        {first_name: 'Alan', last_name: 'Turing', username: 'alan_turing', password: 'password6'},
        {first_name: 'James', last_name: 'Baldwin', username: 'james_baldwin', password: 'password7'},
        {first_name: 'Barbara', last_name: 'Gittings', username: 'barbara_gittings', password: 'password8'},
        {first_name: 'Larry', last_name: 'Kramer', username: 'larry_kramer', password: 'password9'},
        {first_name: 'Christine', last_name: 'Jorgensen', username: 'christine_jorgensen', password: 'password10'}
      ]);
    });
};
