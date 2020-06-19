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

      community_customizations_params = {"en"=> {"name"=>"", "slogan"=>"", "description"=>"", "search_placeholder"=>"", "transaction_agreement_label"=>"", "transaction_agreement_content"=>""}}

      it 'updates the text of typed slogans' do
        update_typed_slogans_params = {"#{@typed_slogan1.id}": {"typed_slogan_text": "updatedtext1"}, "#{@typed_slogan2.id}": {"typed_slogan_text": "updatedtext2"}}
        full_post_params = {"update_typed_slogans": update_typed_slogans_params, "community_customizations": community_customizations_params}
        post :update_details, params: full_post_params

        expect(@typed_slogan1.reload.typed_slogan_text).to eq('updatedtext1')
        expect(@typed_slogan2.reload.typed_slogan_text).to eq('updatedtext2')
      end

      it 'destroys typed slogan if param received from checked box' do
        update_typed_slogans_params = {"#{@typed_slogan1.id}": {"typed_slogan_text": "test1", "remove": "1"}, "#{@typed_slogan2.id}": {"typed_slogan_text": "test2"}}
        full_post_params = {"update_typed_slogans": update_typed_slogans_params, "community_customizations": community_customizations_params}
        post :update_details, params: full_post_params

        expect {@typed_slogan1.reload}.to raise_error ActiveRecord::RecordNotFound
      end

      it 'adds new typed_slogans' do
        new_typed_slogan_params = {"slogans": [{"typed_slogan_text": "new typed slogan", "locale": 'en'}]}
        update_typed_slogans_params = {"#{@typed_slogan1.id}": {"typed_slogan_text": "test1", "remove": "1"}, "#{@typed_slogan2.id}": {"typed_slogan_text": "test2"}}
        full_post_params = {"new_typed_slogans": new_typed_slogan_params, "update_typed_slogans": update_typed_slogans_params, "community_customizations": community_customizations_params}
        post :update_details, params: full_post_params

        expect(TypedSlogan.last.typed_slogan_text).to eq('new typed slogan')
      end
    end
  end
end