# == Schema Information
#
# Table name: causes
#
#  id                :bigint           not null, primary key
#  name              :string(255)
#  description       :text(65535)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  link              :string(255)
#  logo_file_name    :string(255)
#  logo_content_type :string(255)
#  logo_file_size    :integer
#  logo_updated_at   :datetime
#  community_id      :bigint
#  default_cause     :boolean          default(FALSE)
#  archived          :boolean          default(FALSE)
#  deleted           :boolean          default(FALSE)
#
# Indexes
#
#  index_causes_on_community_id  (community_id)
#

require 'spec_helper'

RSpec.describe Cause, type: :model do
  let(:community) { FactoryGirl.create(:community) }
  let(:cause) { FactoryGirl.create(:cause, community: community, default_cause: false) }

  context 'name validations' do
    it 'is present' do
      cause.name = nil
      expect(cause).to_not be_valid
      cause.name = 'test'
      expect(cause).to be_valid
    end

    it 'length' do
      cause.name = ''
      expect(cause).to_not be_valid
      cause.name = 't'
      expect(cause).to be_valid
      cause.name = 'a' * 256
      expect(cause).to_not be_valid
      cause.name = 'a' * 255
      expect(cause).to be_valid
    end
  end

  context 'description validations' do
    it 'is present' do
      cause.description = nil
      expect(cause).to_not be_valid
      cause.description = 'test'
      expect(cause).to be_valid
    end

    it 'length' do
      cause.description = ''
      expect(cause).to_not be_valid
      cause.description = 't'
      expect(cause).to be_valid
    end
  end

  context 'link validations' do
    it 'is present' do
      cause.link = nil
      expect(cause).to_not be_valid
      cause.link = 'http://example.com'
      expect(cause).to be_valid
    end

    it 'format' do
      cause.link = 'not_a_URL'
      expect(cause).to_not be_valid
      cause.link = 'www.example.com'
      expect(cause).to_not be_valid
      cause.link = 'http://example.com'
      expect(cause).to be_valid
    end
  end

  context 'community validations' do
    it 'is present' do
      cause.community = nil
      expect(cause).to_not be_valid
    end
  end

  context 'apply default cause to persons' do
    before(:each) do
      @normal_cause = FactoryGirl.create(:cause, community: community, name: 'another cause', default_cause: false)
      @person = FactoryGirl.create(:person, cause_id: @normal_cause.id)
    end

    it "cause destroyed" do
      @normal_cause.destroy
      expect(@person.reload.cause.default_cause).to eq(true)
    end

    it "cause archived" do
      @normal_cause.archived = true
      @normal_cause.save
      expect(@person.reload.cause.default_cause).to eq(true)
    end

    it "cause deleted" do
      @normal_cause.deleted = true
      @normal_cause.save
      expect(@person.reload.cause.default_cause).to eq(true)
    end
  end

  context 'paranoid deletes' do
    it 'cause is deleted' do
      normal_cause = FactoryGirl.create(:cause, community: community, name: 'another cause', default_cause: false)
      normal_cause.deleted = true
      normal_cause.save
      expect(Cause.available.where(name: normal_cause.name).length).to eq(0)
    end
  end

  context 'person notifications' do
    it 'cause reset' do
      normal_cause = FactoryGirl.create(:cause, community: community, name: 'another cause', default_cause: false)
      person = FactoryGirl.create(:person, community: community, cause_id: normal_cause.id)
      expect(Delayed::Job).to receive(:enqueue)
      expect(CauseResetJob).to receive(:new).with(person.id, normal_cause.id, community.id)
      normal_cause.deleted = true
      normal_cause.save
    end
  end
end


