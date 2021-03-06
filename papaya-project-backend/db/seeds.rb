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

comment_01 = Comment.create(content: 'What a nice papaya!', star_rating: 5, papaya_id: papaya_face.id)
comment_02 = Comment.create(content: 'This papaya has a face!', star_rating: 2, papaya_id: papaya_face.id)
comment_03 = Comment.create(content: 'This papaya has a message!', star_rating: 4, papaya_id: papaya_message.id)
comment_04 = Comment.create(content: 'This papaya is awful', star_rating: 1, papaya_id: papaya_message.id)