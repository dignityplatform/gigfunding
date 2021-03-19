module InfosHelper

  # Class is selected if conversation type is currently selected
  def get_infos_tab_class(tab_name)
    current_tab_name = action_name || "about"
    "inbox_tab_#{current_tab_name.eql?(tab_name) ? 'selected' : 'unselected'}"
  end

  def faqs_react_props
    i18n_react_props.merge({
      images: {
        faqsIllustrationSrc: image_url('faqs/faqs-illustration.png')
      }
    })
  end
end
