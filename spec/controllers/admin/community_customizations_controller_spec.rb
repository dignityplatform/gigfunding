require 'spec_helper'

describe Admin::CommunityCustomizationsController, type: :controller do
  let(:community) { FactoryGirl.create(:community) }
  let(:admin) { create_admin_for(community) }
  

  describe '#update_details' do
    before(:each) do
      @request.host = "#{community.ident}.lvh.me"
      @request.env[:current_marketplace] = community
      sign_in_for_spec(admin)
      @typed_slogan1 = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: 'test1')
      @typed_slogan2 = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: 'test2')
    end

    after(:each) do
      TypedSlogan.destroy_all
    end

    describe 'typed_slogan' do
      it 'updates the text of typed slogans' do
        community_customizations_params = {"en"=> {"name"=>"", "slogan"=>"", "description"=>"", "search_placeholder"=>"", "transaction_agreement_label"=>"", "transaction_agreement_content"=>""}}
        typed_slogan_params = {"#{@typed_slogan1.id}": {"typed_slogan_text": "updatedtext1"}, "#{@typed_slogan2.id}": {"typed_slogan_text": "updatedtext2"}}
        full_post_params = {"typed_slogan": typed_slogan_params, "community_customizations": community_customizations_params}
        post :update_details, params: full_post_params
        
        expect(@typed_slogan1.reload.typed_slogan_text).to eq('updatedtext1')
        expect(@typed_slogan2.reload.typed_slogan_text).to eq('updatedtext2')
      end
    end
  end
end