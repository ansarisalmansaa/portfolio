# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all
Contact.destroy_all

user=User.create(username:"salman8466", password:"salman123")
pp "#{User.count} users created"
spf_app = Project.create!(user_id: user[:id], project_name:"SPF APP", description:"Ecommerce Website for Sunscreens with full CRUD functionality and Authentication.", image_url:"https://i.ibb.co/VqdCYyq/Screen-Shot-2021-08-11-at-11-34-05-AM.png", github_url:"https://github.com/ansarisalmansaa/SPF", deploy_url:"https://spf-sth.netlify.app/")
duework_app = Project.create!(user_id: user[:id], project_name: "DUEWORK APP", description:"This Project will allow user to add and delete new due Projects with subject name, title description and due date.", image_url: "https://i.ibb.co/2hYkMdv/Screen-Shot-2021-08-11-at-11-33-40-AM.png", github_url: "https://github.com/ansarisalmansaa/duework", deploy_url: "https://duework.netlify.app/")
weatherestimate_app = Project.create!(user_id: user[:id], project_name: "WEATHER ESTIMATE APP", description: "This will allow users to search for the Current Weather of a City", image_url: " https://i.ibb.co/JcxHLPm/Screen-Shot-2021-08-11-at-11-35-45-AM.png", github_url: "https://github.com/ansarisalmansaa/Weather-Estimate", deploy_url: "https://weather-estimate-saa.netlify.app/")
pp "#{Project.count} project created"

message_one = Contact.create!(name: "Salman Ansari", email: "salman.mughis@hotmail.com", message:"Hello Salman!!!!!")
message_two = Contact.create!(name: "Bruno", email: "Bruno.123@hotmail.com", message:"Hello Bruno!!!")
pp "#{Contact.count} contact created"