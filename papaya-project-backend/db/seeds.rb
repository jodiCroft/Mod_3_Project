# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


papaya_face = Papaya.create(name: "face_papaya", image: "https://i.imgur.com/Xu4HK0N.png", likes: 1, description: "Add your own image to a papaya!" )
papaya_message = Papaya.create(name: "custom_message", image: "https://i.imgur.com/H2wzYv0.png", likes: 2, description: "Add your own custom message to a papaya!")

user_one = User.create(name: "Jodi Croft", username: "jCroft")
user_two = User.create(name: "Frank Sierra", username: "Frank_Papaya")

comment_01 = Comment.create(content: 'OMG this was such a funny gift to receive!', star_rating: 5, papaya_id: papaya_face.id)
comment_02 = Comment.create(content: 'This random papaya got delivered to my door, so I googled it and this website came up....I hate papayas and I am still trying to figure out who sent it to me!', star_rating: 2, papaya_id: papaya_face.id)
comment_03 = Comment.create(content: 'Haha I always say Lets find out! so it make me laugh when I got this papaya delievered to my door!', star_rating: 4, papaya_id: papaya_message.id)
comment_04 = Comment.create(content: 'If I could leave zero stars, I would! I am allergic to papayas....who would send this.', star_rating: 1, papaya_id: papaya_message.id)