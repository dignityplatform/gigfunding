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

  describe 'user redirects' do
    describe 'GET /' do
      it 'user not logged in' do
        get('/', headers: {host: "#{@community.ident}.lvh.me"})
        expect(request).to redirect_to(landing_page_path)
      end

      it 'user logged in' do
        login_user(@user)
        get('/', headers: {host: "#{@community.ident}.lvh.me"})
        expect(request).not_to redirect_to(landing_page_path)
        expect(request).to render_template(:index)
      end

      it 'can visit homepage after visiting landing page' do
        get('/landing-page', headers: {host: "#{@community.ident}.lvh.me"})
        get('/', headers: {host: "#{@community.ident}.lvh.me"})
        expect(request).not_to redirect_to(landing_page_path)
        expect(request).to render_template(:index)
      end
    end
  end

  def login_user(user)
    allow_any_instance_of(ApplicationController).to receive(:current_person).and_return(user)
  end
end
