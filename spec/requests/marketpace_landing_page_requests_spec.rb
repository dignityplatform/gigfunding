require "spec_helper"

RSpec.describe MarketplaceLandingPageController, type: :request do

  before(:each) do
    @community = FactoryGirl.create(:community)
    @user = create_admin_for(@community)
    @user.update(is_admin: true)
  end

  describe 'GET /' do
    it 'user not logged in' do
      get('/', headers: {host: "#{@community.ident}.lvh.me"})
      expect(request).to render_template(:show)
    end

    it 'user logged in' do
      login_user(@user)
      get('/', headers: {host: "#{@community.ident}.lvh.me"})
      expect(request).to redirect_to(homepage_without_locale_path)
    end
  end

  describe 'GET /landing-page' do
    it 'successful request' do
      get('/landing-page', headers: {host: "#{@community.ident}.lvh.me"})
      expect(request).to render_template(:show)
    end
  end

  def login_user(user)
    allow_any_instance_of(ApplicationController).to receive(:current_person).and_return(user)
  end
end
