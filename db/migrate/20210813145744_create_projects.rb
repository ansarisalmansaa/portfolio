class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.references :user, null: false, foreign_key: true
      t.string :project_name
      t.text :description
      t.string :image_url
      t.string :github_url
      t.string :deploy_url

      t.timestamps
    end
  end
end
