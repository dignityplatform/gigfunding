require "spec_helper"

RSpec.describe MarketplaceLandingPageController, type: :request do

  let(:plan) do
    {
      expired: false,
      features: {
        whitelabel: true,
        admin_email: true,
        footer: true
      },
      created_at: Time.zone.now,
      updated_at: Time.zone.now
    }
  end

  before(:each) do
    @community = FactoryGirl.create(:community)
    @user = create_admin_for(@community)
    @user.update(is_admin: true)
  end

  describe 'GET /landing-page' do
    it 'successful request' do
      get('/landing-page', headers: {host: "#{@community.ident}.lvh.me"})
      expect(request).to render_template(:show)
    end
  end
end
