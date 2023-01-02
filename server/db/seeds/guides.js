exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guides')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        { id: 1, name: 'Jeremiah Alfonso', bio: 'Hello my name is Jeremiah Alfonso and I am here to show you around Wellington I have been a tour guide for three years now, and during that time Ive given tours to people from all over the world - Australia, Japan, China, Russia… even America! They all come up here because of the wonders we have in this city. We are known as the \'little New Zealand\' city, but that doesn\'t mean we don\'t have anything special to offer! We can boast with our many beaches, museums, and fine dining restaurants. Not to mention, we also have the best rugby team in New Zealand! It\'s time to start your tour! Let me take you on a journey through our town.',language: 'English', fee: 52, contact_number: 6440274795922, email: 'J.Alfonso@gmail.com', picture_url: 'https://i.chzbgr.com/full/8334924288/hCFACD046/stock-photo-of-hide-the-pain-harold-looking-at-the-camera-with-a-pained-expression' },

        { id: 2, name: 'Bobby Souffle', bio: 'I can show you a giant hole in the ground', language: 'English', fee: 55, contact_number: 455454544444 , email: 'B.Sou@gmail.com', picture_url: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg' },
        { id: 3, name: 'Noah Arkansas', bio: 'There was lots of animals on my boat', language: 'Latin, English', fee: 30, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=' },
        { id: 4, name: 'James Bond', bio: 'You can call me 007', language: 'Latin, English', fee: 200, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=' },
        { id: 5, name: 'Lara Croft', bio: 'Let\'s raid some tombs', language: 'Latin, English', fee: 350, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://www.shutterstock.com/image-photo/portrait-young-beautiful-cute-cheerful-260nw-666258808.jpg' },
        { id: 6, name: 'Aladdin', bio: 'I can show you the world', language: 'Latin, English', fee: 40, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
        { id: 7, name: 'Jessi', bio: 'Jessi from the block', language: 'English, Korean', fee: 2000, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://i.pinimg.com/originals/e2/2b/62/e22b628eaab18215af31ae4aa5a5b54d.jpg' },
        { id: 8, name: 'Lisa', bio: 'This is definitely a bio', language: 'Latin, English', fee: 75, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://t4.ftcdn.net/jpg/01/51/99/39/360_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg' },
        { id: 9, name: 'Lily', bio: 'I\'m interesting', language: 'Latin, English', fee: 22, contact_number: 455454544444 , email: 'N.Ark@gmail.com', picture_url: 'https://t4.ftcdn.net/jpg/01/55/04/97/360_F_155049786_Ch17gRfPjmKG5N9S21VMs8LWBkjkfVDi.jpg' },
      ])
    })
}

