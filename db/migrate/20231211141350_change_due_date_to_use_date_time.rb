class ChangeDueDateToUseDateTime < ActiveRecord::Migration[7.0]
  def change
    change_column :blockedsites, :duedate, :datetime
  end
end
