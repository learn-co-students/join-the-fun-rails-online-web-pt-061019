class AddAssociationColumns < ActiveRecord::Migration[5.0]
  def change
    change_table :rides do |t|
      t.belongs_to :taxi
      t.belongs_to :passenger
    end

  end
end
