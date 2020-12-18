# == Schema Information
#
# Table name: listing_shapes
#
#  id                          :integer          not null, primary key
#  community_id                :integer          not null
#  transaction_process_id      :integer          not null
#  price_enabled               :boolean          not null
#  shipping_enabled            :boolean          not null
#  availability                :string(32)       default("none")
#  name                        :string(255)      not null
#  name_tr_key                 :string(255)      not null
#  action_button_tr_key        :string(255)      not null
#  sort_priority               :integer          default(0), not null
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  deleted                     :boolean          default(FALSE)
#  listing_color               :string(255)      default("FFFFFF")
#  listing_title_color         :string(255)      default("000000")
#  user_descriptor_tr_key      :string(255)
#  type_selection_label_tr_key :string(255)
#
# Indexes
#
#  index_listing_shapes_on_community_id  (community_id)
#  index_listing_shapes_on_name          (name)
#  multicol_index                        (community_id,deleted,sort_priority)
#

require 'spec_helper'

describe ListingShape, type: :model do
  let(:listing_shape) { FactoryGirl.create(:listing_shape) }

  context '#update_with_opts' do
    it 'creates and destroys listing units' do
      opts = {
        units:
        [
          {:unit_type=>"hour", :name=>nil, :kind=>"time", :selector=>nil, :name_tr_key=>nil, :selector_tr_key=>nil, :quantity_selector=>"number"},
          {:unit_type=>"day", :name=>nil, :kind=>"time", :selector=>nil, :name_tr_key=>nil, :selector_tr_key=>nil, :quantity_selector=>"day"}
        ]
      }
      expect(listing_shape.listing_units.count).to eq 0
      listing_shape.update_with_opts(opts)
      units = listing_shape.listing_units
      expect(units.count).to eq 2
      unit_types = units.map(&:unit_type)
      expect(unit_types.include?('hour')).to eq true
      expect(unit_types.include?('day')).to eq true

      opts2 = {
        units:
        [
          {:unit_type=>"day", :name=>nil, :kind=>"time", :selector=>nil, :name_tr_key=>nil, :selector_tr_key=>nil, :quantity_selector=>"day"},
          {:unit_type=>"night", :name=>nil, :kind=>"time", :selector=>nil, :name_tr_key=>nil, :selector_tr_key=>nil, :quantity_selector=>"night"},
          {:unit_type=>"week", :name=>nil, :kind=>"time", :selector=>nil, :name_tr_key=>nil, :selector_tr_key=>nil, :quantity_selector=>"number"}
        ]
      }
      listing_shape.update_with_opts(opts2)
      units = listing_shape.listing_units
      expect(units.count).to eq 3
      unit_types = units.map(&:unit_type)
      expect(unit_types.include?('day')).to eq true
      expect(unit_types.include?('night')).to eq true
      expect(unit_types.include?('week')).to eq true

      opts3 = { units: [] }
      listing_shape.update_with_opts(opts3)
      units = listing_shape.listing_units
      expect(units.count).to eq 0
    end
  end

  context 'listing_color validations' do
    it 'correct hex format' do
      listing_shape.listing_color = "F0F0F0"
      expect(listing_shape).to be_valid
      listing_shape.listing_color = "000000"
      expect(listing_shape).to be_valid
    end

    it 'incorrect hex format' do
      listing_shape.listing_color = "#F0F0F0"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_color = "00000"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_color = "ZZZZZZ"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_color = "Z ZZZZ"
      expect(listing_shape).to_not be_valid
    end

    it 'nil value passed' do
      listing_shape.listing_color = nil
      listing_shape.save
      expect(listing_shape.listing_color).to eq('FFFFFF')
    end
  end

  context 'listing_title_color validations' do
    it 'correct hex format' do
      listing_shape.listing_title_color = "F0F0F0"
      expect(listing_shape).to be_valid
      listing_shape.listing_title_color = "000000"
      expect(listing_shape).to be_valid
    end

    it 'incorrect hex format' do
      listing_shape.listing_title_color = "#F0F0F0"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_title_color = "00000"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_title_color = "ZZZZZZ"
      expect(listing_shape).to_not be_valid
      listing_shape.listing_title_color = "Z ZZZZ"
      expect(listing_shape).to_not be_valid
    end
  end

  context '#user_descriptor' do
    it 'no user descriptor' do
      subject = FactoryGirl.create(:listing_shape, user_descriptor_tr_key: nil)
      expect(subject.user_descriptor).to eq('')
    end

    it 'user descriptor present' do
      subject = FactoryGirl.create(:listing_shape, user_descriptor_tr_key: 'test.translation')
      expect(subject.user_descriptor).to eq(' test')
    end
  end

  context '#type_selection_label' do
    it 'no type selection label' do
      subject = FactoryGirl.create(:listing_shape, type_selection_label_tr_key: nil)
      expect(subject.type_selection_label).to eq("Make a 'day' type listing")
    end

    it 'type selection label present' do
      subject = FactoryGirl.create(:listing_shape, type_selection_label_tr_key: 'test.translation')
      expect(subject.type_selection_label).to eq('test')
    end
  end
end
