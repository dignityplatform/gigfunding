window.ST = window.ST || {};

(function(module) {

  var initializeTransactionAgreementFields = function() {
    $('#community_transaction_agreement_checkbox').click(updateFieldModality);
  };

  var initializeCustomizationFormValidation = function () {
    $("#edit_community").validate({
      errorPlacement: function (error, element) {
        if (element.hasClass("selectized")) {
          element.parent().append(error);
        }
        else {
          element.after(error);
        }
      }
    });
  };

  var updateFieldStatus = function($field, enabled) {
    $field
      .prop('disabled', !enabled)
      .toggleClass('disabled', !enabled)
      .toggleClass('required', enabled);
  };

  var updateFieldModality = function() {
    var txAgreementEnabled = $('#community_transaction_agreement_checkbox').is(':checked');
    var modalFields = $('input.transaction-agreement-modal, textarea.transaction-agreement-modal');
    
    updateFieldStatus(modalFields, false);

    if (txAgreementEnabled) {
      modalFields.filter(function(){
        return $(this).data("locale-enabled") === true;
      }).each(function(index, field){
        updateFieldStatus($(field), true);
      });
    }
  };

  module.updateLocales = function(locales) {
    var modalFields = $('input.transaction-agreement-modal, textarea.transaction-agreement-modal');
    modalFields.data("locale-enabled", false);
    $(locales).each(function(index, locale){
      modalFields.filter("[name*='["+locale+"]']").data("locale-enabled", true);
    });
    updateFieldModality();
  };

  module.initializeCommunityCustomizations = function () {
    initializeTransactionAgreementFields();
    initializeCustomizationFormValidation();
  };

  const generateNewTypedSloganFormElement = (locale, idNum) => {
    I18n.locale = locale
    let newTypedSloganTemplate = `
    <input type="checkbox" name="new_typed_slogans[slogans][][ignore]" id="new-typed-slogan-${locale}-${idNum}" value="1" class="typed-slogan-checkbox">
    <input type="hidden" name="new_typed_slogans[slogans][][locale]" id="new_typed_slogans_slogans__locale" value="${locale}">
    <div class="name-locale-text_field typed-slogan-textbox">
      <input type="text" name="new_typed_slogans[slogans][][typed_slogan_text]" id="new_typed_slogans_slogans__typed_slogan_text" placeholder="${I18n.t("admin.communities.edit_details.community_typed_slogan_add_placeholder")}">
    </div>
    <label class="remove-typed-slogan-button" for="new-typed-slogan-${locale}-${idNum}">
      <div class="remove-typed-slogan-remove">
        ${I18n.t("admin.communities.edit_details.community_typed_slogan_remove")}
      </div>
      <div class="remove-typed-slogan-undo">
        ${I18n.t("admin.communities.edit_details.community_typed_slogan_undo")}
      </div>
    </label>
    `
    let newTypedSloganElement = document.createElement("div")
    newTypedSloganElement.classList.add('typed-slogan-container')
    newTypedSloganElement.innerHTML = newTypedSloganTemplate
    return newTypedSloganElement
  }

  module.addNewTypedSlogan = () => {
    let counter = 1
    let addTypedSloganButtons = document.getElementsByClassName('add-typed-slogan-button')
    for (let i = 0; i < addTypedSloganButtons.length; i++) {
      addTypedSloganButtons[i].addEventListener('click', (e) => {
        e.preventDefault()
        let thisButton = e.target
        let buttonContainer = thisButton.parentElement.parentElement
        let translationContainer = thisButton.parentElement.parentElement.parentElement
        let locale = thisButton.getAttribute('data-locale')
        let newTypedSloganFormElement = generateNewTypedSloganFormElement(locale, counter++)
        translationContainer.insertBefore(newTypedSloganFormElement, buttonContainer)
      })
    }
  }
})(window.ST);
