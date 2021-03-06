module CommunitiesHelper

  def community_name_locals
    translations = find_community_customizations(:name)
    {
      header: t("admin.communities.edit_details.community_name"),
      input_classes: "",
      info_text: I18n.t("admin.communities.edit_details.edit_community_name_description"),
      input_name: "name",
      translations: translations
    }
  end

  def community_slogan_locals
    translations = find_community_customizations(:slogan)
    looks_link = link_to(t("admin.communities.edit_details.see_how_it_looks_like"), "/?big_cover_photo=true", id: "view_slogan_link", target: :_blank, rel: :noopener)
    info_text = I18n.t("admin.communities.edit_details.edit_community_slogan_description_hideable", :see_how_it_looks_like => looks_link)
    {
      header: t("admin.communities.edit_details.community_slogan"),
      input_classes: "",
      info_text: info_text,
      input_name: "slogan",
      translations: translations
    }
  end

  def community_typed_slogan_locals
    translations = find_typed_slogans
    info_text = I18n.t("admin.communities.edit_details.edit_community_typed_slogan_description")
    {
      header: t("admin.communities.edit_details.community_typed_slogan"),
      input_classes: "",
      info_text: info_text,
      input_name: "typed_slogan",
      translations: translations
    }
  end

  def community_description_locals
    translations = find_community_customizations(:description)
    looks_link = link_to(t("admin.communities.edit_details.see_how_it_looks_like"), "/?big_cover_photo=true", target: :_blank, rel: :noopener)
    info_text = I18n.t("admin.communities.edit_details.edit_community_description_description_hideable", :see_how_it_looks_like => looks_link)
    {
      header: t("admin.communities.edit_details.community_description"),
      input_classes: "",
      info_text: info_text,
      input_name: "description",
      translations: translations
    }
  end

  def community_search_placeholder_locals
    translations = find_community_customizations(:search_placeholder)
    {
      header: t("admin.communities.edit_details.community_search_placeholder"),
      input_classes: "",
      info_text: I18n.t("admin.communities.edit_details.edit_community_search_placeholder_description", :see_how_it_looks_like => link_to(t("admin.communities.edit_details.see_how_it_looks_like"), "/", target: :_blank, rel: :noopener)),
      input_name: "search_placeholder",
      translations: translations
    }
  end

  def transaction_agreement_label_locals
    translations = find_community_customizations(:transaction_agreement_label)
    {
      header: t("admin.communities.edit_details.transaction_agreement_checkbox_header"),
      input_classes: "transaction-agreement-modal",
      info_text: I18n.t("admin.communities.edit_details.transaction_agreement_checkbox_label_description"),
      input_name: "transaction_agreement_label",
      translations: translations,
      maxlength: 255
    }
  end

  def transaction_agreement_text_locals
    translations = find_community_customizations(:transaction_agreement_content)
    {
      header: t("admin.communities.edit_details.transaction_agreement_text_header"),
      input_classes: "transaction-agreement-modal",
      info_text: t("admin.communities.edit_details.transaction_agreement_description", read_more: t("listing_conversations.transaction_agreement_checkbox.read_more")),
      input_name: "transaction_agreement_content",
      translations: translations
    }
  end

  def find_community_customizations(customization_key)
    available_locales.inject({}) do |translations, (locale_name, locale_value)|
      translation = @community_customizations[locale_value][customization_key] || ""
      translations[locale_value] = {language: locale_name, translation: translation}
      translations
    end
  end

  def customizations_sorted_by_locale
    available_locales.map do |language, locale|
      customization = @current_community.community_customizations.where(locale: locale).first
      if customization
        [customization, language, locale]
      end
    end.compact
  end

  def find_typed_slogans
    available_locales.inject({}) do |translations, (locale_name, locale_value)|
      slogans = @current_community.typed_slogans.where(locale: locale_value)
      translations[locale_value] = {language: locale_name, translation: slogans}
      translations
    end
  end
end
