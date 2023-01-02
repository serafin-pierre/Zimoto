exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, rating: 5, title: 'Alfonso Pronto', text: 'Very fast, lovely and fun. A wonderful guide who lead our party of 4 on a journey around the city. I had an amazing experience with Alfonso and would recommend him to anyone visiting Wellington!', guide_id: 1, },
        { id: 2, rating: 3, title: 'Uhhhhhhh', text: 'This man loves America a little too much. Quite loud and did not like his attitude towards me and my family', guide_id: 2, },
        { id: 3, rating: 5, title: 'hes pretty cool', text: 'There was a boat, there was alot of animals. I love animals.', guide_id: 3, },
        { id: 4, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 3, },
        { id: 5, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 4, },
        { id: 6, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 3, },
        { id: 7, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 5, },
        { id: 8, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 6, },
        { id: 9, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 7, },
        { id: 10, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 8, },
        { id: 11, rating: 2, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 9, },
        { id: 12, rating: 1, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 3, },
        { id: 13, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 4, },
        { id: 14, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 3, },
        { id: 15, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 5, },
        { id: 16, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 6, },
        { id: 17, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 7, },
        { id: 18, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 8, },
        { id: 19, rating: 5, title: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. ', guide_id: 9, },
        { id: 20, rating: 3, title: 'Late', text: 'Firstly I would like to say that Alfonso was a great guide through the city. Unfortunately he was 30 minutes late, so my family and I were left lost in the middle of the city.', guide_id: 1,},
      ])
    })
}
