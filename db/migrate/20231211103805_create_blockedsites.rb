class CreateBlockedsites < ActiveRecord::Migration[7.0]
  def change
    create_table :blockedsites do |t|
      t.string :link
      t.string :durationtype
      t.integer :days
      t.integer :hours
      t.integer :minutes
      t.integer :seconds
      t.date :duedate

      t.timestamps
    end
  end
end
